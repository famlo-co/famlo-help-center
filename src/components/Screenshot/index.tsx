import React, {useRef, type ReactNode} from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type Props = {
  /** Path under static/, e.g. "/img/screens/organizations/payouts.webp". */
  src: string;
  /** What the reader should notice, not a description of pixels. Required. */
  alt: string;
  caption?: ReactNode;
  /** Shown in the frame's address bar, e.g. "famlo.co/manage". Browser frame only. */
  url?: string;
  /** "browser" for desktop captures, "phone" for 390px ones, "none" for crops. */
  frame?: 'browser' | 'phone' | 'none';
  /** Intrinsic size at 1x, so the page does not jump while the image loads. */
  width?: number;
  height?: number;
  /**
   * Every capture has a dark twin beside it (`payouts.dark.webp`), shown when
   * the reader is in dark mode. Set false only for a screen the product itself
   * draws light-only; scripts/check-screenshots.mjs enforces the pair.
   */
  dark?: boolean;
};

/** "/img/a/b.webp" -> "/img/a/b.dark.webp" */
export function darkVariant(src: string): string {
  return src.replace(/(\.[a-z0-9]+)$/i, '.dark$1');
}

/**
 * A screenshot of the product in a light frame, with click-to-zoom.
 *
 * Images are captured at 2x with their highlights baked in (see
 * scripts/screenshots/), so this component never draws annotations itself:
 * a highlight that lives in CSS drifts the first time a layout shifts, one
 * drawn by the capture tool is wherever the element really was.
 */
export default function Screenshot({
  src,
  alt,
  caption,
  url,
  frame = 'browser',
  width,
  height,
  dark = true,
}: Props): React.ReactElement {
  const dialog = useRef<HTMLDialogElement>(null);
  const light = useBaseUrl(src);
  const darkSrc = useBaseUrl(darkVariant(src));

  // Both images are in the markup and CSS shows the one matching the theme, so
  // a theme toggle swaps instantly and the right one paints on first load
  // (Docusaurus sets data-theme before paint). A display:none lazy image is
  // never fetched, so readers download only the variant they see; the zoom
  // view's copy loads only when the dialog opens.
  const pair = (className: string) =>
    dark ? (
      <>
        <img src={light} alt={alt} width={width} height={height}
          loading="lazy" decoding="async"
          className={clsx(className, 'screenshot--light')} />
        <img src={darkSrc} alt={alt} width={width} height={height}
          loading="lazy" decoding="async"
          className={clsx(className, 'screenshot--dark')} />
      </>
    ) : (
      <img src={light} alt={alt} width={width} height={height}
        loading="lazy" decoding="async" className={className} />
    );

  const image = pair(styles.image);

  return (
    <figure className={clsx(styles.figure, styles[frame])}>
      <button
        type="button"
        className={styles.zoom}
        onClick={() => dialog.current?.showModal()}
        aria-label={`Enlarge screenshot: ${alt}`}>
        {frame === 'browser' && (
          <span className={styles.bar} aria-hidden="true">
            <span className={styles.dots}>
              <span />
              <span />
              <span />
            </span>
            {url && <span className={styles.url}>{url}</span>}
          </span>
        )}
        {image}
      </button>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}

      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-label={alt}
        onClick={(e) => {
          // A click on the backdrop lands on the dialog itself.
          if (e.target === e.currentTarget) dialog.current?.close();
        }}>
        {pair(styles.dialogImage)}
        <button
          type="button"
          className={styles.close}
          onClick={() => dialog.current?.close()}>
          Close
        </button>
      </dialog>
    </figure>
  );
}
