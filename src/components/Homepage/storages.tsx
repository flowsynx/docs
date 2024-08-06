import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Icon } from '@iconify/react';

type StorageItem = {
  title: string;
  icon: string;
};

const StoragesList: StorageItem[] = [
  {
    title: 'Local File System',
    icon: 'fluent-mdl2:file-system'
  },
  {
    title: 'In-Memory Storage',
    icon: 'fluent:memory-16-regular'
  },
  {
    title: 'Microsoft Azure Files Storage',
    icon: 'mdi:microsoft'
  },
  {
    title: 'Microsoft Azure Blobs Storage',
    icon: 'mdi:microsoft'
  },
  {
    title: 'Google Cloud Storage',
    icon: 'mdi:google'
  },
  {
    title: 'Google Drive',
    icon: 'mdi:google'
  },
  {
    title: 'Amazon AWS S3 Storage',
    icon: 'devicon-plain:amazonwebservices-wordmark'
  }
];

function Storage({title, icon}: StorageItem) {
  return (
    <div className={clsx('col col--3')}>
        <div className="card storage-card margin-bottom--lg">
          <div className="card__header">
            <Icon icon={icon} height="64" />
            <Heading as="h4">{title}</Heading>
          </div>
        </div>
    </div>
  );
}

export default function HomepageSupportedStorages() {
  return (
    <section className="padding-vert--lg about-section">
      <div className="container">
        <Heading as="h2">FlowSynx supported storages</Heading>
        <div className="row">
          <div className="col padding-bottom--lg">
          Flowsynx tries to support different storage as much as possible. Below is a part of the list of storages that are supported by Flowsynx.
          </div>
        </div>
        <div className="row">
          {StoragesList.map((props, idx) => (
            <Storage key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}