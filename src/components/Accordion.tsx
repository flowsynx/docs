import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './Accordion.module.css'; // optional, for custom styling

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <button
        className={clsx(styles.accordionHeader, isOpen && styles.open)}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className={clsx(styles.arrow, isOpen && styles.open)}>▼</span>
      </button>
      {isOpen && <div className={styles.accordionContent}>{children}</div>}
    </div>
  );
}

export default function Accordion({ items }) {
  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}