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
          <div className="col col--9 text--left">
            <Heading as="h3" className="hero__title">
            FlowSynx: Orchestrate Declarative, Plugin-Driven DAG Workflows on .NET
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className='{styles.buttons} text--left padding-top--lg'>
              <Link className="button button--primary button--lg margin-right--sm"
                to="/docs/getting-started">
                Get started
              </Link>
              <Link className="button button--outline button--primary button--lg margin-right--sm"
                to="docs/reference/flowsynx/api">
                API Reference
              </Link>
              <Link className="button button--outline button--primary button--lg margin-right--sm" 
              target='_blank' to="https://plugins.flowsynx.io">
                Plugins
              </Link>
              <Link className="button button--outline button--primary button--lg" target='_blank'
                to="https://github.com/flowsynx/samples">
                Samples
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
          In today’s software landscape, automation, repeatability, and modular orchestration are key to achieving scalability, maintainability, 
          and operational efficiency. Yet many workflow platforms remain rigid, overly complex, or locked into a single technology stack.
           FlowSynx breaks those barriers. Built on .NET, this open-source, cross-platform workflow orchestration system empowers developers and 
          organizations to define, execute, and manage complex workflows with ease.<br />
          
          The mission of FlowSynx is clear: deliver a lightweight, extensible, and developer-friendly engine that adapts to diverse domains—from 
          data engineering and DevOps to healthcare, finance, and enterprise integrations. It strikes the perfect balance between no-code simplicity 
          and full-code flexibility, allowing teams to tailor workflows precisely to their needs through a modular, plugin-driven architecture.<br />
          
          At its core, FlowSynx leverages a micro-kernel design, cleanly separating orchestration logic from functional extensions. This decoupled 
          architecture allows you to dynamically load, develop, or replace plugins without disrupting system stability—making FlowSynx highly customizable, 
          maintainable, and easy to upgrade.
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
      </main>
    </Layout>
  );
}
