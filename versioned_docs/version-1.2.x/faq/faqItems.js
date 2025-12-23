import React from 'react';

export const faqItems = [
  {
    title: 'When should I choose FlowSynx over other workflow platforms?',
    content: <>Use FlowSynx when you need to unify data and orchestrate workflows across legacy, cloud, and modern systems. Its declarative, JSON-based DAGs provide dependency-aware execution, branching, parallelism, retries, schema validation, and fully extensible plugin support, making it ideal for complex enterprise integrations.</>,
  },
  {
    title: 'How does FlowSynx handle secrets securely?',
    content: <>FlowSynx integrates with enterprise-grade secret management solutions such as <b>Infisical</b>, <b>Azure Key Vault</b>, <b>HashiCorp Vault</b>, and <b>AWS Secrets Manager</b>. Environment variables can also be used for simpler setups. All secrets are injected securely into workflows without exposing sensitive information.</>,
  },
  {
    title: "What's the difference between error handling strategies in FlowSynx?",
    content: <>FlowSynx supports multiple error handling strategies, including retry policies, fail-fast mechanisms, and compensating transactions. Choose the strategy that fits your workflow’s reliability and compliance requirements. Learn more here: <b><a href='http://localhost:3000/docs/concepts/retry-policies-error-handling'>Retry Policies & Error Handling</a></b>.</>,
  },
  {
    title: 'Can FlowSynx run without Docker?',
    content: <>Yes. FlowSynx can run directly on Windows, Linux, or macOS if all dependencies are installed. Docker is recommended for reproducibility, consistent environments, and simplified deployment across hybrid infrastructures.</>,
  },
  {
    title: "How does FlowSynx perform in enterprise environments?",
    content: <>FlowSynx is optimized for lightweight and complex DAG workflows, supporting parallel execution and horizontal scaling. Performance depends on your infrastructure and workload, but it is designed to scale across hybrid and multi-system environments.</>,
  },
  {
    title: "Where can I see the FlowSynx roadmap?",
    content: <>The roadmap outlines upcoming features, integrations, and improvements. Check the official repository here: <b><a href='https://github.com/flowsynx/flowsynx/blob/master/docs/ROADMAP.md'>RoadMap</a></b>.</>,
  },
];