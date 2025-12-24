import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/Homepage/features';
import GitHubContributors from '@site/src/components/GitHubContributors';
import FeatureHighlights from '@site/src/components/FeatureHighlights';
import Heading from '@theme/Heading';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--background')}>
      <div className="container">
        <div className="row">
          <div className="col col--12 text--left">
            <Heading as="h3" className="hero-title">
            Unified Compositional Substrate for Orchestrating Intelligent Information Flow
            </Heading>
            <p className="hero-subtitle">{siteConfig.tagline}</p>
            <div className='{styles.buttons} text--left padding-top--lg'>
              <Link className="button button--quickstart button--lg margin-right--md margin-bottom--md"
                to="/docs/getting-started">
                Get started
              </Link>
              <Link className="button hero-button--secondary button--lg margin-right--md margin-bottom--md"
                to="/docs/getting-started/quickstarts/flowsynx-in-5-minutes">
                Quick Starts
              </Link>
              <Link className="button hero-button--secondary button--lg margin-right--md margin-bottom--md"
                to="docs/reference/flowsynx/api">
                API Reference
              </Link>
              <Link className="button hero-button--secondary button--lg margin-right--md margin-bottom--md" 
              target='_blank' to="https://plugins.flowsynx.io">
                Plugins
              </Link>
              <Link className="button hero-button--secondary button--lg margin-bottom--md" target='_blank'
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
    <section className="about-section">
      <div className="container">
        <div className="about-wrapper">
          <h2 className="about-title">What is FlowSynx?</h2>
          <p> In today’s enterprise landscape, connecting fragmented systems, ensuring data consistency, and orchestrating 
            complex workflows are critical to achieving operational efficiency, scalability, and maintainability. 
            Yet, many workflow platforms remain rigid, siloed, or locked into a single technology stack. 
            <b>FlowSynx breaks these barriers</b>. Built on .NET, this cross-platform orchestration engine enables 
            organizations to seamlessly unify data and compositional substrates across legacy systems, cloud platforms, 
            and modern applications. Its plugin-driven, declarative DAG architecture provides the flexibility to integrate 
            any system, automate any process, and maintain full control over execution. </p>
            
            <p> The mission of FlowSynx is clear: deliver a lightweight, extensible, and enterprise-ready orchestration 
              engine that adapts to diverse domains—from healthcare and finance to data engineering, DevOps, and complex 
              hybrid integrations. It strikes the perfect balance between simplicity and flexibility, allowing teams to define, 
              extend, and manage workflows precisely to their business needs. At its core, FlowSynx leverages a modular micro-kernel 
              design, cleanly separating orchestration logic from functional extensions. This decoupled architecture treats each 
              system, dataset, and workflow as compositional substrates, enabling plugins to be developed, loaded, updated, or 
              replaced dynamically—without disrupting existing workflows—making FlowSynx highly customizable, maintainable, and 
              future-proof for the hybrid enterprise. </p>
        </div>
      </div>
    </section>

  );
}

function HomepageFlowSynxArchitecture() {
  return (
    <section className="archSection">
      <div className="container">
      <Heading as="h2" className="archTitle">
          Architecture Overview
        </Heading>

        <p className="archSubtitle">
        A detailed diagram of the modular architecture enabling scalable, intelligent workflow automation.
        </p>
        
        <div className="archCard">
          <div className="archImageWrapper">
            <img
              src="/img/architecture-diagram.jpg"
              alt="FlowSynx Architecture Diagram"
              className="archImage"
            />
          </div>

          <div className="archContent">
            <h3>Interaction Tools</h3>
            <ul>
              <li><b>CLI Interface</b>: Command-line tools for interacting with the FlowSynx system, enabling workflow management from terminals.</li>
              <li><b>REST API Gateway</b>: Secure REST APIs for external integrations, remote workflow control, and querying status.</li>
              <li><b>SDK (Library)</b>: Programmatic access via libraries enabling applications to embed or automate workflow operations.</li>
              <li><b>UI Console</b>: Browser-based management UI for real-time monitoring and secure administration.</li>
            </ul>

            <h3>FlowSynx Core</h3>
            <ul>
              <li><b>Workflow Orchestrator</b>: Executes workflows defined as JSON DAGs.</li>
              <li><b>Plugin Manager</b>: Loads plugins dynamically, including marketplace integration.</li>
              <li><b>Security & Auth</b>: Unified authentication and authorization for UI, API, and CLI.</li>
              <li><b>Logging & Auditing</b>: Tracks workflow execution, plugin events, and security logs.</li>
              <li><b>Trigger Engine</b>: Starts workflows via schedules, webhooks, event sources, or system signals.</li>
              <li><b>Error Handling</b>: Supports retries, timeouts, fallbacks, and custom error strategy definitions.</li>
            </ul>

            <h3>Execution Environments</h3>
            <ul>
              <li>
                <b>Deployment Models</b>: Runs on desktops, servers, or containers with full cross-platform support.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

function HomepageContributors() {
  return (
    <section className="contributorsSection">
      <div className="container">
        <Heading as="h2" className="contributorsTitle">
          Meet Our Contributors
        </Heading>

        <p className="contributorsDescription">
          FlowSynx thrives thanks to our dedicated community of contributors. Their expertise,
          creativity, and commitment shape every release. We are proud to introduce the people
          who make this project possible.
        </p>

        <div className="contributorsGridWrapper">
          <GitHubContributors owner="flowsynx" repo="flowsynx" />
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
