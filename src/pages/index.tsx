import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/Homepage/features';
import GitHubContributors from '@site/src/components/GitHubContributors';
import FeatureHighlights from '@site/src/components/FeatureHighlights';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--background', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--10 text--left">
            <Heading as="h3" className="hero__title">
            Declarative and Unified Interoperability Orchestrator for Intelligent Information Flow
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className='{styles.buttons} text--left padding-top--lg'>
              <Link className="button button--primary button--lg button--quickstart margin-right--md margin-bottom--md"
                to="/docs/getting-started">
                Get started
              </Link>
              <Link className="button button--outline button--secondary hero-button--secondary button--lg margin-right--md margin-bottom--md"
                to="/docs/getting-started/quickstarts/flowsynx-in-5-minutes">
                Quick Starts
              </Link>
              <Link className="button button--outline button--secondary hero-button--secondary button--lg margin-right--md margin-bottom--md"
                to="docs/reference/flowsynx/api">
                API Reference
              </Link>
              <Link className="button button--outline button--secondary hero-button--secondary button--lg margin-right--md margin-bottom--md" 
              target='_blank' to="https://plugins.flowsynx.io">
                Plugins
              </Link>
              <Link className="button button--outline button--secondary hero-button--secondary button--lg margin-bottom--md" target='_blank'
                to="https://github.com/flowsynx/samples">
                Samples
              </Link>
            </div>
          </div>
        </div>
        <FeatureHighlights />
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
          In today’s enterprise landscape, connecting fragmented systems, ensuring data consistency, and orchestrating complex workflows 
          are critical to achieving operational efficiency, scalability, and maintainability. Yet, many workflow platforms remain rigid, 
          siloed, or locked into a single technology stack. <b>FlowSynx breaks these barriers</b>. Built on .NET, this cross-platform 
          orchestration engine enables organizations to seamlessly unify data and orchestrate workflows across legacy systems, cloud 
          platforms, and modern applications. Its plugin-driven, declarative DAG architecture provides the flexibility to integrate any 
          system, automate any process, and maintain full control over execution.<br /><br />
          
          The mission of FlowSynx is clear: deliver a lightweight, extensible, and enterprise-ready orchestration engine that adapts to diverse 
          domains—from healthcare and finance to data engineering, DevOps, and complex hybrid integrations. It strikes the perfect balance between 
          simplicity and flexibility, allowing teams to define, extend, and manage workflows precisely to their business needs. At its core, 
          FlowSynx leverages a modular micro-kernel design, cleanly separating orchestration logic from functional extensions. This decoupled 
          architecture allows plugins to be developed, loaded, updated, or replaced dynamically—without disrupting existing workflows—making 
          FlowSynx highly customizable, maintainable, and future-proof for the hybrid enterprise.
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
              <li><b>UI-Based Console Management</b>: Intuitive browser-based interface for real-time monitoring and administration of workflows, and system settings with secure authentication.</li>
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

function HomepageContributors() {
  return (
    <section className='padding-vert--lg'>
      <div className="container">
        <Heading as="h2">Meet Our Contributors</Heading>
        <div className="row">
          <div className="col">
            <p>
            FlowSynx thrives thanks to our dedicated community of contributors. Their expertise, creativity, 
            and commitment shape every release. We are delighted to introduce our contributors who make this possible.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <GitHubContributors owner="flowsynx" repo="flowsynx" />
          </div>
      </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Streamline and orchestrate processes with FlowSynx, .NET-based workflow automation platform`}
      description="Design, control, and automate every step of your workflow—linking ideas, decisions, and actions into a single, smart execution engine—all without writing a line of code.">
      <HomepageHeader />
      <main>
        <HomepageAboutFlowSynx />
        <HomepageFeatures />
        <HomepageFlowSynxArchitecture />
        <HomepageContributors />
      </main>
    </Layout>
  );
}
