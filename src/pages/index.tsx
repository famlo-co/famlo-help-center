import {type ReactNode, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useHistory} from '@docusaurus/router';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Icon from '@site/src/components/Icon';
import {
  announcements,
  audienceCards,
  popular,
  topics,
  type Audience,
} from '@site/src/data/home';

import styles from './index.module.css';

function Hero() {
  const [query, setQuery] = useState('');
  const [audience, setAudience] = useState<Audience>('family');
  const history = useHistory();

  const search = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) history.push(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <header className={styles.hero}>
      <div className={clsx('container', styles.heroInner)}>
        <Heading as="h1" className={styles.heroTitle}>
          How can we help?
        </Heading>
        <p className={styles.heroLead}>
          Guides for families finding and booking activities, and for the
          organizations running them.
        </p>

        <form role="search" onSubmit={search} className={styles.search}>
          <label htmlFor="home-search" className="sr-only">
            Search the help center
          </label>
          <Icon name="search" size={22} className={styles.searchIcon} />
          <input
            id="home-search"
            type="search"
            className={styles.searchInput}
            placeholder="Search guides, e.g. “refund” or “payouts”"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
        </form>

        <div role="group" aria-label="Show guides for" className={styles.switch}>
          <button
            type="button"
            aria-pressed={audience === 'family'}
            className={styles.switchButton}
            onClick={() => setAudience('family')}>
            I'm a family
          </button>
          <button
            type="button"
            aria-pressed={audience === 'organization'}
            className={styles.switchButton}
            onClick={() => setAudience('organization')}>
            I run an organization
          </button>
        </div>

        <nav
          aria-label={audience === 'family' ? 'Popular with families' : 'Popular with organizations'}
          className={styles.popular}>
          <div className={styles.popularHeading}>
            {audience === 'family' ? 'Popular with families' : 'Popular with organizations'}
          </div>
          <ul>
            {popular[audience].map((guide) => (
              <li key={guide.to + guide.title}>
                <Link to={guide.to} className={styles.popularLink}>
                  <span>{guide.title}</span>
                  <Icon name="chevronRight" size={18} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function AudienceCards() {
  return (
    <section className={clsx('container', styles.section)}>
      <div className={styles.audienceGrid}>
        {audienceCards.map((card) => (
          <div key={card.audience} className={styles.audienceCard}>
            <div className={styles.audienceHead}>
              <span className={styles.iconTile}>
                <Icon name={card.icon} />
              </span>
              <Heading as="h2" className={styles.audienceTitle}>
                {card.title}
              </Heading>
            </div>
            <p className={styles.muted}>{card.description}</p>
            <ul className={styles.chips}>
              {card.links.map((link) => (
                <li key={link.to + link.title}>
                  <Link to={link.to} className={styles.chip}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to={card.to} className={styles.more}>
              {card.linkLabel} <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function Topics() {
  return (
    <section className={clsx('container', styles.section)}>
      <Heading as="h2" className={styles.sectionTitle}>
        Browse by topic
      </Heading>
      <ul className={styles.topicGrid}>
        {topics.map((topic) => (
          <li key={topic.title}>
            <Link
              to={topic.to}
              className={clsx(styles.topic, topic.isNew && styles.topicNew)}>
              <span className={styles.topicTop}>
                <Icon name={topic.icon} size={26} className={styles.accent} />
                {topic.isNew && <span className={styles.newBadge}>New</span>}
              </span>
              <span className={styles.topicTitle}>{topic.title}</span>
              <span className={styles.topicText}>{topic.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function WhatsNew() {
  if (announcements.length === 0) return null;
  return (
    <section className={clsx('container', styles.section)}>
      <div className={styles.sectionHead}>
        <Heading as="h2" className={styles.sectionTitle}>
          What's new
        </Heading>
        <Link to="/changelog" className={styles.more}>
          All announcements <Icon name="arrowRight" size={16} />
        </Link>
      </div>
      <ul className={styles.newsGrid}>
        {announcements.slice(0, 3).map((item, i) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className={clsx(styles.news, i === 0 && styles.newsFeatured)}>
              <span className={styles.newsMeta}>
                {item.date} · {item.audience}
              </span>
              <span className={styles.newsTitle}>{item.title}</span>
              <span className={styles.newsText}>{item.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Support() {
  return (
    <section className={clsx('container', styles.section, styles.lastSection)}>
      <div className={styles.support}>
        <div className={styles.supportText}>
          <span className={styles.supportIcon}>
            <Icon name="lifebuoy" size={28} />
          </span>
          <div>
            <Heading as="h2" className={styles.supportTitle}>
              Still stuck?
            </Heading>
            <p className={styles.muted}>
              Open a support ticket from your account. We read every ticket
              and usually reply within one business day.
            </p>
          </div>
        </div>
        <div className={styles.supportActions}>
          <Link to="https://famlo.co/support" className={styles.primaryButton}>
            Open a ticket
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout description="Guides for families and organizations on Famlo: finding and booking activities, payments, running your organization, and your own website.">
      <Hero />
      <main>
        <AudienceCards />
        <Topics />
        <WhatsNew />
        <Support />
      </main>
    </Layout>
  );
}
