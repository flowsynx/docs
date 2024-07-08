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
    title: 'Cross-Platform',
    icon: 'icomoon-free:display',
    description: (
      <>
        FlowSynx system is designed to work in several computing platforms. It can work across 
        multiple types of platforms or operating environments such as Windows, Linux, and MacOS.

      </>
    ),
  },
  {
    title: 'Robust CLI',
    icon: 'clarity:command-line',
    description: (
      <>
        An integrated, and robust CLI that allows you to manage the flowsynx system (e.g., initialize, run, stop, update, uninstall, etc.) 
        and interact with it (e.g., execute commands related to storage and etc.).
      </>
    ),
  },
  {
    title: 'Various storage systems',
    icon: 'eos-icons:cloud-computing-outlined',
    description: (
      <>
        It will try to cover and support most of the cloud storage products including S3 object stores, business & consumer file storage services, 
        as well as standard transfer protocols.
      </>
    ),
  },
  {
    title: 'SDK',
    icon: 'material-symbols-light:sdk-outline-sharp',
    description: (
      <>
        In addition to the CLI and API to access and interact with the flowsynx system, 
        the SDK is also designed to easily interact with flowsynx through different programming languages.
      </>
    ),
  },
  {
    title: 'Dashboard',
    icon: 'mage:dashboard-check',
    description: (
      <>
        FlowSynx Dashboard is a single and easy-to-view interface tool that help you to manage, 
        and view configurations, plugins sections, as well as checking health of running FlowSynx system.
      </>
    ),
  },
  {
    title: 'Support docker',
    icon: 'cib:docker',
    description: (
      <>
        FlowSynx is able to be launched on Docker in an independent and isolated environments. 
        In addition to the dockerization, it, FlowSynx, can be executed standalone.

      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
        <div className="card feature-card margin-bottom--lg">
          <div className="card__header">
            <Icon icon={icon} height="64" />
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
        <Heading as="h2">FlowSynx Capabilities</Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}