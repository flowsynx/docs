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
    title: 'Schema-Based Validation',
    icon: 'mdi:shape-outline',
    description: (
      <>
        FlowSynx supports <b>schema-based validation</b> for workflows, task definitions, plugin configurations, 
        and input/output data. By defining JSON Schemas, users can ensure that 
        workflows adhere to expected formats, required fields, and data types before execution. This reduces 
        runtime errors, enforces consistency, and improves reliability across automated processes.
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
    title: 'Console: Web-UI Management',
    icon: 'mdi:web',
    description: (
      <>
        The <b>FlowSynx Console</b> provides a modern, browser-based interface for workflow management. 
        Users can visually design, configure, and monitor workflows, review execution logs, and manage 
        plugins directly from the web UI. With real-time dashboards, drag-and-drop workflow editing, 
        and secure multi-user access, the Console simplifies collaboration and operational oversight 
        across distributed teams.
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
  },
  {
    title: 'Human-in-the-Loop (HITL) Approval',
    icon: 'pajamas:approval-solid',
    description: (
      <>
      Integrate human decision points into automated workflows with Human-in-the-Loop Approval. This 
      feature pauses execution until an authorized user manually approves or rejects a pending task. 
      Ideal for scenarios requiring compliance checks, risk assessment, or business validation, it 
      adds a layer of control and accountability within otherwise automated processes.
      </>
    ),
  },
  {
    title: 'Flexible Error Handling',
    icon: 'bxs:error',
    description: (
      <>
      Ensure workflow resilience with configurable error-handling strategies that define how failures 
      are managed during execution. Choose from Retry, Skip, or Abort behaviors to match the criticality 
      of each task. Fine-tune retry behavior with customizable policies, including maximum retries, 
      initial delay, and backoff strategies such as Fixed, Linear, Exponential, or Jitter, enabling 
      intelligent recovery from transient failures without manual intervention.
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