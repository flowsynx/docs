import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Icon } from '@iconify/react';

type FeatureItem = {
  title: string;
  icon: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Plugin-Based Extensibility',
    icon: 'icon-park-solid:api',
    description: (
      <>
        Each functional component in FlowSynx—from task definitions and runtime behaviors to integration endpoints 
        and authentication providers—is treated as a plugin. Users can develop custom plugins using well-defined 
        interfaces and register them with the system, enabling FlowSynx to adapt to specific business rules, protocols, or environments.
      </>
    ),
  },
  {
    title: 'Cross-Platform Execution',
    icon: 'garden:platform-26',
    description: (
      <>
        FlowSynx is designed to run seamlessly across major platforms, including Windows, Linux, and macOS. Additionally, 
        it offers <b>containerized deployment</b> via Docker, making it ideal for integration into modern DevOps pipelines, 
        Kubernetes environments, or hybrid cloud architectures.
      </>
    ),
  },
  {
    title: 'Workflow Definition and Execution',
    icon: 'fluent:flowchart-16-filled',
    description: (
      <>
        Workflows in FlowSynx are defined as <b>Directed Acyclic Graphs (DAGs)</b> using JSON or DSL representations. 
        These workflows support conditional logic, parallel execution, error handling, input/output mapping, and 
        custom execution contexts—enabling advanced control flow with traceability and fault tolerance.
      </>
    ),
  },
  {
    title: 'Command-Line Interface (CLI)',
    icon: 'heroicons:command-line-20-solid',
    description: (
      <>
        A comprehensive CLI tool is included for managing workflows, invoking executions, debugging tasks, 
        monitoring logs, and interacting with the system at a low level. This is ideal for scripting, 
        batch jobs, and infrastructure automation.
      </>
    ),
  },
  {
    title: 'Software Development Kit (SDK)',
    icon: 'material-symbols:sdk',
    description: (
      <>
        FlowSynx provides a full-featured SDK for programmatic access. Developers can use the SDK to integrate 
        workflow functionality into their applications, define dynamic workflows at runtime, fetch execution results, 
        and implement plugin hosting strategies. The SDK is structured with clean architecture principles and is 
        available in .NET, with planned bindings for other ecosystems via REST APIs or language bridges.
      </>
    ),
  },
  {
    title: 'REST-API Accessibility',
    icon: 'dashicons:rest-api',
    description: (
      <>
        Exposes core functionality through a well-documented, versioned RESTful API that enables secure remote access 
        and seamless integration across platforms and programming languages. The API supports standard HTTP methods 
        (GET, POST, PUT, DELETE), offers comprehensive OpenAPI/Swagger documentation, and includes authentication, 
        rate limiting, and error handling mechanisms to ensure robustness, scalability, and ease of use for developers.
      </>
    ),
  },
  {
    title: 'Authentication and Security',
    icon: 'mdi:security-lock',
    description: (
      <>
        FlowSynx includes pluggable authentication support, enabling integration with modern identity providers 
        such as OAuth2, OpenID Connect (e.g., Keycloak), as well as support for basic and token-based authentication. 
        Security policies can be enforced per user, per plugin, and per workflow execution.
      </>
    ),
  },
  {
    title: 'Logging, Monitoring, and Auditing',
    icon: 'eos-icons:monitoring',
    description: (
      <>
        All workflow executions and plugin interactions are fully traceable. The system provides structured logging, 
        execution history, and audit trail support for compliance and observability.
      </>
    ),
  },
  {
    title: 'Standalone and Containerized Modes',
    icon: 'cib:docker',
    description: (
      <>
        FlowSynx can operate as a lightweight local service for single-user or single-machine scenarios, 
        or it can scale horizontally through distributed orchestration models—enabling large-scale, 
        multi-tenant execution across clusters or cloud-native infrastructures.
      </>
    ),
  },
  {
    title: 'Trigger-Based Workflow Execution',
    icon: 'subway:power',
    description: (
      <>
        Automatically launch workflows in response to specific events like file uploads, API calls, 
        or scheduled intervals. Triggers eliminate manual intervention by monitoring conditions and 
        instantly activating corresponding task flows, ensuring real-time, event-driven automation.
      </>
    ),
  }
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
        <div className="card feature-card margin-bottom--lg">
          <div className="card__header">
            <Icon className="feature-card-header" icon={icon} height="64" />
            <Heading as="h3">{title}</Heading>
          </div>
          <div className="card__body">
            <p>{description}</p>
          </div>
        </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2">FlowSynx features and capabilities</Heading>
        <div className="row">
          <div className="col padding-bottom--lg">
          A comprehensive look at the modular workflow engine powering intelligent automation and seamless integration.
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}