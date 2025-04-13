import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/Homepage/features';
import HomepageSupportedConnectors from '@site/src/components/Homepage/connectors';
import HomepageAnnouncement from '@site/src/components/Homepage/announcement';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--background', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--8 text--left">
            <Heading as="h3" className="hero__title">
              Orchestrate and Automate workflow automation system
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className='{styles.buttons} text--left padding-top--lg'>
              <Link className="button button--primary button--lg margin-right--md"
                to="/docs/getting-started/install-flowctl">
                Get started
              </Link>
              <Link className="button button--outline button--primary button--lg"
                to="docs/api/service-invocation-api">
                API Reference
              </Link>
            </div>
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
            FlowSynx is a cross-platform program to manage files and data on different repositories such as 
            cloud storage, local file system, streams, and etc.
            It is a feature-rich alternative to cloud vendors' web storage interfaces. 
            It will try to cover and support most of the cloud storage products including Azure Files, Azure Blobs, 
            business & consumer file storage services, as well as standard transfer protocols.
            In addition, FlowSynx has the ability to filter and sort different data and then transfer or store them into different types.
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
      <HomepageHeader />
      <main>
        <HomepageAboutFlowSynx />
        <HomepageFeatures />
        <HomepageSupportedConnectors />
      </main>
    </Layout>
  );
}
