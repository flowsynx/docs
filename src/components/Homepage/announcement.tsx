import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Icon } from '@iconify/react';

export default function HomepageAnnouncement({ message, url }) {
  return (
    <section className="announcement announcement-dark text--center">
      <div className="announcement-title row">
        <Icon icon={"noto:party-popper"} />
        <a className='announcement-link text-shine' href={url}>{message}</a>
        <Icon icon={"twemoji:partying-face"} />
      </div>
    </section>
  );
}