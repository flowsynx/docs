import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './features.module.css';
import { Icon } from '@iconify/react';

type FeatureItem = {
  title: string;
  icon: string;
  description: JSX.Element;
  slug: string; 
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Plugin-Based Extensibility',
    icon: 'icon-park-solid:api',
    slug: '/docs/concepts/plugin-based-architecture',
    description: (
      <>
        Each functional component in FlowSynx—from task definitions and runtime behaviors to integration endpoints 
        and authentication providers—is treated as a plugin. Users can develop custom plugins using well-defined 
        interfaces and register them with the system, enabling FlowSynx to adapt to specific business rules, 
        protocols, or environments.
      </>
    ),
  },
  {
    title: 'Cross-Platform Execution',
    icon: 'garden:platform-26',
    slug: '',
    description: (
      <>
        FlowSynx runs seamlessly on Windows, Linux, and macOS, and supports <b>containerized deployment</b> via Docker. 
        This flexibility makes it perfect for integration into modern DevOps pipelines, Kubernetes environments, or 
        hybrid cloud architectures, ensuring efficient workflow management across diverse infrastructures.
      </>
    ),
  },
  {
    title: 'Workflow Definition and Execution',
    icon: 'fluent:flowchart-16-filled',
    slug: '/docs/concepts/dependencies-execution-order',
    description: (
      <>
        Workflows in FlowSynx are defined as <b>Directed Acyclic Graphs (DAGs)</b> using JSON or DSL. They support 
        conditional logic, parallel execution, error handling, and input/output mapping, enabling advanced control 
        flow with traceability and fault tolerance for robust automation and integration.
      </>
    ),
  },
  {
    title: 'Schema-Based Validation',
    icon: 'mdi:shape-outline',
    slug: '/docs/concepts/json-schema-validation',
    description: (
      <>
        FlowSynx supports <b>schema-based validation</b> for workflows and plugin configurations. By defining JSON Schemas, 
        users ensure workflows adhere to expected formats and data types before execution. This reduces runtime errors and 
        improves reliability across automated processes, enforcing consistency throughout.
      </>
    ),
  },
  {
    title: 'Unified Data Abstraction Layer',
    icon: 'mdi:database-sync-outline',
    slug: '/docs/concepts/unified-data-abstraction-layer',
    description: (
      <>
        The <b>UDAL</b> in FlowSynx provides a unified interface for accessing and transforming data from diverse sources. 
        It simplifies complexities, ensuring consistent structure for workflow integration while maintaining uniform access 
        control and validation across all automated processes, enhancing reliability and efficiency.
      </>
    ),
  },
  {
    title: 'Source-Agnostic Processing',
    icon: 'mdi:database-cog-outline',
    slug: '/docs/concepts/source-agnostic-processing',
    description: (
      <>
        <b>Source-Agnostic Processing</b> in FlowSynx allows seamless data handling from any source—databases, APIs, or 
        files—without source-specific logic. Once integrated into the <b>UDAL</b> model, all processing plugins (e.g., CSV, ZipCompressor) 
        operate uniformly, ensuring consistent transformation across diverse systems.
      </>
    ),
  },
  {
    title: 'Conditional Flow Control',
    icon: 'mdi:shuffle-variant',
    slug: '',
    description: (
      <>
        <b>Conditional Flow Control</b> in FlowSynx enables dynamic task execution based on conditions. By incorporating branching 
        logic and expression evaluations, workflows can intelligently adapt at runtime, ensuring efficient automation even in complex 
        scenarios, enhancing overall process flexibility and responsiveness.
      </>
    ),
  },
  {
    title: 'Expression Evaluation',
    icon: 'mdi:function-variant',
    slug: '/docs/reference/flowsynx/expressions',
    description: (
      <>
        <b>Expression Evaluation</b> in FlowSynx allows dynamic parameterization of workflows using expressions. Values can be computed 
        at runtime based on variables, task outputs, or conditional logic. This enables workflows to adapt intelligently, reducing static 
        configuration and supporting scenarios like computed paths and rule-driven automation.
      </>
    ),
  },  
  {
    title: 'Command-Line Interface (CLI)',
    icon: 'heroicons:command-line-20-solid',
    slug: '',
    description: (
      <>
        A powerful CLI tool is provided for managing workflows, invoking executions, debugging tasks, and monitoring logs. It's perfect for 
        scripting, batch jobs, and automating infrastructure, allowing users to interact with the system at a low level for enhanced control 
        and efficiency in their automation processes.
      </>
    ),
  },
  {
    title: 'Software Development Kit (SDK)',
    icon: 'material-symbols:sdk',
    slug: '',
    description: (
      <>
        FlowSynx offers a comprehensive SDK for programmatic access, enabling developers to integrate workflow functionality, define dynamic 
        workflows, fetch execution results, and implement plugin hosting. Built on clean architecture principles, the SDK is available in .NET, 
        with future bindings planned for other ecosystems via REST APIs.
      </>
    ),
  },
  {
    title: 'REST-API Accessibility',
    icon: 'dashicons:rest-api',
    slug: '',
    description: (
      <>
        Provides a well-documented, versioned RESTful API for secure remote access and integration across platforms. It supports standard HTTP 
        methods (GET, POST, PUT, DELETE) and includes OpenAPI/Swagger documentation, authentication, rate limiting, and error handling for 
        robustness and scalability, ensuring ease of use for developers.
      </>
    ),
  },
  {
    title: 'Console: Web-UI Management',
    icon: 'mdi:web',
    slug: '',
    description: (
      <>
        The <b>FlowSynx Console</b> offers a modern web interface for managing workflows. Users can design, configure, and monitor workflows, 
        review logs, and manage plugins. With real-time dashboards and drag-and-drop editing, it simplifies collaboration and oversight across 
        teams, enhancing operational efficiency.
      </>
    ),
  },
  {
    title: 'Authentication and Security',
    icon: 'mdi:security-lock',
    slug: '',
    description: (
      <>
        FlowSynx supports pluggable authentication, integrating with identity providers like OAuth2 and OpenID Connect (e.g., Keycloak). 
        It also offers basic and token-based authentication, allowing security policies to be enforced at user, plugin, and workflow execution 
        evels for enhanced control and compliance.
      </>
    ),
  },
  {
    title: 'Secret Management Integration',
    icon: 'fluent:key-multiple-16-filled',
    slug: '',
    description: (
      <>
        FlowSynx features a unified <b>Secret Management provider framework</b> for securely handling sensitive data like API keys, passwords, 
        and tokens. It supports various secret providers, including Infisical, Azure Key Vault, HashiCorp Vault, and AWS Secrets Manager, all 
        under a consistent interface for ease of use.
      </>
    ),
  }, 
  {
    title: 'Logging, Monitoring, and Auditing',
    icon: 'eos-icons:monitoring',
    slug: '',
    description: (
      <>
        All workflow executions and plugin interactions are traceable with structured logging, execution history, and audit trails. 
        Logs can be written to files and centralized systems like Seq, ensuring compliance, observability, and easy monitoring, 
        troubleshooting, and review of automated processes.
      </>
    ),
  },
  {
    title: 'Standalone and Containerized Modes',
    icon: 'cib:docker',
    slug: '',
    description: (
      <>
      FlowSynx operates as a lightweight local service for single-user scenarios or scales horizontally through distributed orchestration. 
      This enables large-scale, multi-tenant execution across clusters or cloud-native infrastructures, ensuring flexibility and efficiency 
      in diverse deployment environments.
      </>
    ),
  },
  {
    title: 'Trigger-Based Workflow Execution',
    icon: 'subway:power',
    slug: '/docs/concepts/trigger-based-execution',
    description: (
      <>
        Automatically launch workflows in response to events like file uploads, API calls, or scheduled intervals. Triggers remove manual 
        intervention by monitoring conditions and instantly activating task flows, ensuring real-time, event-driven automation for efficient 
        and responsive operations across various scenarios.
      </>
    ),
  },
  {
    title: 'Human-in-the-Loop (HITL) Approval',
    icon: 'pajamas:approval-solid',
    slug: '/docs/concepts/human-in-the-loop-tasks',
    description: (
      <>
      Integrate human decision points into workflows with Human-in-the-Loop Approval. This feature pauses execution until an authorized user 
      approves or rejects a task. Ideal for compliance checks or business validation, it adds control and accountability within automated processes, 
      ensuring critical decisions are made by humans.
      </>
    ),
  },
  {
    title: 'Flexible Error Handling',
    icon: 'bxs:error',
    slug: '/docs/concepts/retry-policies-error-handling',
    description: (
      <>
      Ensure workflow resilience with error-handling strategies that define failure management. Choose from Retry, Skip, or Abort behaviors. Fine-tune 
      retry policies, including max retries, initial delay, and backoff strategies like Fixed, Linear, or Exponential, enabling intelligent recovery from 
      transient failures without manual intervention.
      </>
    ),
  },
  {
    title: 'Unified Error Codes & Response Integration',
    icon: 'fluent:puzzle-cube-16-filled',
    slug: '',
    description: (
      <>
        FlowSynx introduces a standardized error code system in the format <b>[FSX ####]</b>, uniquely identifying error categories. This structure 
        ensures consistent error reporting across workflows and APIs. Errors are surfaced in the FlowSynx web interface, providing clear context and 
        real-time visibility for users and developers.
      </>
    ),
  } 
];

function Feature({ title, icon, description, slug }: FeatureItem) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <div className={styles.featureCard}>
        <div className={styles.featureHeader}>
          <Icon className={styles.featureIcon} icon={icon} height="56" />
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        </div>

        <div className={styles.featureBody}>
          {description}
        </div>

        {slug && (
          <div className={styles.featureFooter}>
            <a
              className={styles.readMoreButton}
              href={slug}
            >
              Read more
              <Icon icon="mdi:arrow-right" className={styles.readMoreIcon} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          FlowSynx Features & Capabilities
        </Heading>

        <p className={styles.sectionSubtitle}>
          A comprehensive look at the modular workflow engine powering intelligent automation and seamless integration.
        </p>

        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}