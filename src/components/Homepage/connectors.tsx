import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Icon } from '@iconify/react';

type ConnectorItem = {
  title: string;
  type: string;
  icon: string;
};

const ConnectorsList: ConnectorItem[] = [
  {
    title: 'Local File System',
    type: 'Storage',
    icon: 'fluent-mdl2:file-system'
  },
  {
    title: 'In-Memory Storage',
    type: 'Storage',
    icon: 'fluent:memory-16-regular'
  },
  {
    title: 'Microsoft Azure Files Storage',
    type: 'Storage',
    icon: 'mdi:microsoft'
  },
  {
    title: 'Microsoft Azure Blobs Storage',
    type: 'Storage',
    icon: 'mdi:microsoft'
  },
  {
    title: 'Google Cloud Storage',
    type: 'Storage',
    icon: 'mdi:google'
  },
  {
    title: 'Google Drive',
    type: 'Storage',
    icon: 'mdi:google'
  },
  {
    title: 'Amazon AWS S3 Storage',
    type: 'Storage',
    icon: 'devicon-plain:amazonwebservices-wordmark'
  },
  {
    title: 'CSV (Comma Separated Values)',
    type: 'Stream',
    icon: 'grommet-icons:document-csv'
  },
  {
    title: 'JSON (JavaScript Object Notation)',
    type: 'Stream',
    icon: 'file-icons:json-1'
  }
];

function Connector({title, type, icon}: ConnectorItem) {
  return (
    <div className={clsx('col col--3')}>
        <div className="card connector-card margin-bottom--lg">
          <div className="card__header">
            <Icon icon={icon} height="64" />
            <Heading as="h4" className=''>{title}</Heading>
            Type: {type}
          </div>
        </div>
    </div>
  );
}

export default function HomepageSupportedConnectors() {
  return (
    <section className="padding-vert--lg connector-section">
      <div className="container">
        <Heading as="h2">FlowSynx supported connectors</Heading>
        <div className="row">
          <div className="col padding-bottom--lg">
          Flowsynx tries to support different connectors as much as possible. Below is a part of the list of connectors that are supported by Flowsynx.
          </div>
        </div>
        <div className="row">
          {ConnectorsList.map((props, idx) => (
            <Connector key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}