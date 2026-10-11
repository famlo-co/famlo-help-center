import React from 'react';
import Link from '@docusaurus/Link';
import {registrars} from '@site/src/data/registrars';
import styles from './styles.module.css';

/**
 * "Find your registrar": a jump row of names, then one collapsible panel per
 * DNS provider with where its DNS settings live, its quirks, and links to its
 * own official help pages.
 *
 * Every panel is in the HTML (a <details>, not a tab that renders on click), so
 * search finds "GoDaddy CNAME" on this page and the page works without
 * JavaScript. The data lives in src/data/registrars.ts; each link there was
 * opened and checked against the provider's own help site.
 */
export default function RegistrarGuides(): React.ReactElement {
  return (
    <div className={styles.wrap}>
      <nav aria-label="Jump to your registrar" className={styles.jump}>
        {registrars.map((r) => (
          <a key={r.id} href={`#registrar-${r.id}`} className={styles.chip}>
            {r.name}
          </a>
        ))}
      </nav>
      {registrars.map((r) => (
        <details key={r.id} id={`registrar-${r.id}`} className={styles.panel}>
          <summary className={styles.summary}>
            <span className={styles.name}>{r.name}</span>
            {r.hostNote && <span className={styles.hostNote}>{r.hostNote}</span>}
          </summary>
          <div className={styles.body}>
            <p>
              <strong>Where DNS lives: </strong>
              {r.where}
            </p>
            {r.tips.length > 0 && (
              <ul className={styles.tips}>
                {r.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            )}
            <p className={styles.linksLabel}>{r.name}'s own help:</p>
            <ul className={styles.links}>
              {r.links.map((link) => (
                <li key={link.url}>
                  <Link to={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </div>
  );
}
