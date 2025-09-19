import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/Homepage/features';
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
                to="/docs/getting-started">
                Get started
              </Link>
              <Link className="button button--outline button--primary button--lg margin-right--md"
                to="docs/reference/api">
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

function HomepageFlowSynxArchitecture() {
  return (
    <section className='padding-vert--lg about-section'>
      <div className="container">
        <Heading as="h2">Architecture overview</Heading>
        <div className="row">
          <div className="col">
          <img src="/img/architecture-diagram.jpg" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Intraction tools</h3>
            <ul>
              <li><b>CLI Interface</b>: Command-line tools for interacting with the FlowSynx system, enabling workflow management and execution from terminals.</li>
              <li><b>REST API Gateway</b>: Provides secure, HTTP/HTTPS RESTful APIs to integrate with external systems, allowing remote workflow control and status querying.</li>
              <li><b>SDK (Library)</b>: Developer-friendly libraries exposing FlowSynx functionalities programmatically, enabling custom applications to embed or automate workflow operations.</li>
            </ul>

            <h3>FlowSynx Core</h3>
            <ul>
              <li><b>Workflow Orchestrator</b>: Loads and executes workflows defined as JSON DAGs.</li>
              <li><b>Plugin Manager</b>: Dynamically loads plugins and maintains a plugin marketplace/registry.</li>
              <li><b>Security & Auth</b>: Handles authentication and authorization for both REST API and CLI access.</li>
              <li><b>Logging & Auditing</b>: Tracks workflow execution, plugin activity, and audit trails.</li>
              <li><b>Trigger Engine</b>: Listens for external events or schedules workflows to start based on timers, webhooks, or system signals.</li>
              <li><b>Error handling</b>: Built-in support for task retries, timeouts, and fallbacks ensures reliable execution even in unstable environments. Custom retry strategies can be defined per task.</li>
            </ul>

            <h3>Execution environments</h3>
            <ul>
              <li><b>Deployment & Execution Environments</b>: Supports flexible deployment models from standalone desktop/server installs to cloud containerized orchestration, with cross-platform compatibility.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Automate and orchestrate processes using FlowSynx automation system`}
      description="Empowering you to design, control, and automate every step of your workflow by linking ideas, decisions, and actions into one seamless, smart execution engine without writing a single line of code.">
      <HomepageHeader />
      <main>
        <HomepageAboutFlowSynx />
        <HomepageFeatures />
        <HomepageFlowSynxArchitecture />
      </main>
    </Layout>
  );
}
