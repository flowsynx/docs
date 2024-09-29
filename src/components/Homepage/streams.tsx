import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Icon } from '@iconify/react';

type StreamItem = {
  title: string;
  icon: string;
};

const StreamsList: StreamItem[] = [
  {
    title: 'CSV (Comma Separated Values)',
    icon: 'grommet-icons:document-csv'
  },
  {
    title: 'JSON (JavaScript Object Notation)',
    icon: 'file-icons:json-1'
  }
];

function Stream({title, icon}: StreamItem) {
  return (
    <div className={clsx('col col--4')}>
        <div className="card storage-card margin-bottom--lg">
          <div className="card__header">
            <Icon icon={icon} height="64" />
            <Heading as="h4">{title}</Heading>
          </div>
        </div>
    </div>
  );
}

export default function HomepageSupportedStreams() {
  return (
    <section className="padding-vert--lg stream-section">
      <div className="container">
        <Heading as="h2">FlowSynx supported streams</Heading>
        <div className="row">
          <div className="col padding-bottom--lg">
          Flowsynx tries to support different streams as much as possible. Below is a part of the list of streams that are supported by Flowsynx.
          </div>
        </div>
        <div className="row">
          {StreamsList.map((props, idx) => (
            <Stream key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}