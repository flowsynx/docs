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
            Automate and orchestrate processes using FlowSynx automation system
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className='{styles.buttons} text--left padding-top--lg'>
              <Link className="button button--primary button--lg margin-right--md"
                to="/docs/getting-started/install-flowctl">
                Get started
              </Link>
              <Link className="button button--outline button--primary button--lg margin-right--md"
                to="docs/api/service-invocation-api">
                API Reference
              </Link>
              <Link className="button button--outline button--primary button--lg" target='_blank'
                to="https://plugins.flowsynx.io">
                Plugins
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
          In modern software ecosystems, automation, repeatability, and modular orchestration have become critical for 
          scalability, maintainability, and operational efficiency. However, many existing workflow management systems 
          are either too rigid, overly complex, or tightly coupled to specific platforms or technologies. FlowSynx was 
          developed to address these limitations by providing a flexible, cross-platform workflow orchestration system 
          that empowers developers and organizations to define, execute, and manage complex workflows with ease.<br />
          
          The core goal of FlowSynx is to offer a lightweight, extensible, and developer-friendly orchestration engine 
          that can be adapted to diverse domains—from data engineering and DevOps to healthcare, finance, and enterprise 
          integrations. It aims to bridge the gap between no-code simplicity and full-code flexibility, giving users the 
          power to tailor workflows to their exact requirements using a modular and plugin-driven approach.<br />
          
          FlowSynx is built on a micro-kernel architecture, which serves as the lightweight, extensible core of the system. 
          This architectural pattern decouples the core orchestration logic from functional extensions, allowing users to 
          dynamically load, develop, or replace plugins without impacting system stability. This enables FlowSynx to be highly
          customizable while still remaining easy to maintain and upgrade.
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
      </main>
    </Layout>
  );
}
