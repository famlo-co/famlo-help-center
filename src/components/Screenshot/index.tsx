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
};

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
}: Props): React.ReactElement {
  const dialog = useRef<HTMLDialogElement>(null);
  const resolved = useBaseUrl(src);

  const image = (
    <img
      src={resolved}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className={styles.image}
    />
  );

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
        <img src={resolved} alt={alt} className={styles.dialogImage} />
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
