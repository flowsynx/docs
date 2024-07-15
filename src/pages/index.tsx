import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/Homepage/features';
import HomepageSupportedStorages from '@site/src/components/Homepage/storages';
import HomepageAnnouncement from '@site/src/components/Homepage/announcement';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark margin-vert--none', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6 text--left">
            <Heading as="h3" className="hero__title">
              Syncs and manage your files to different storage
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className='{styles.buttons} text--left'>
              <Link className="button button--primary button--lg margin-right--md"
                to="/docs/getting-started/install-flowctl">
                Get started
              </Link>
              <Link className="button button--outline button--primary button--lg"
                to="docs/flowsynx-api/use-the-flowsynx-api">
                API Reference
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <img src="/img/hero-img.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageAboutFlowSynx() {
  return (
    <section className='padding-vert--lg about-section'>
      <div className="container">
        <Heading as="h2">What is the FlowSynx?</Heading>
        <div className="row">
          <div className="col">
            FlowSynx is a cross-platform program to manage files and data on cloud storage and locally. 
            It is a feature-rich alternative to cloud vendors' web storage interfaces. 
            It will try to cover and support most of the cloud storage products including Azure Files, Azure Blobs, 
            business & consumer file storage services, as well as standard transfer protocols.
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Syncs and manage your files and streams to different storage`}
      description="Description will go into a meta tag in <head />">
      <HomepageAnnouncement message={"FlowSynx 0.3.2 is now available!"} url={"/blog/flowsynx-v0.3.2-is-now-available"} />
      <HomepageHeader />
      <main>
        <HomepageAboutFlowSynx />
        <HomepageFeatures />
        <HomepageSupportedStorages />
      </main>
    </Layout>
  );
}
