import React from 'react';
import styles from './FeatureHighlights.module.css';

export default function FeatureHighlights() {
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h3 className={`${styles.title} ${styles.green}`}>Secure</h3>
            <p className={styles.subtitle}>Built-in security and RBAC capability ensures that workflows are protected</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.col}>
            <h3 className={`${styles.title}`}>Declarative</h3>
            <p className={styles.subtitle}>Directed Acyclic Graphs (DAGs) definition with supporting schema validation</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.col}>
            <h3 className={`${styles.title}`}>Air-Gapped Ready</h3>
            <p className={styles.subtitle}>Works on-premises and cloud-ready, supporting hybrid deployments</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.col}>
            <h3 className={`${styles.title}`}>Plugin-Based Extensibility</h3>
            <p className={styles.subtitle}>Add, upgrade, or remove capabilities dynamically and version-controlled</p>
          </div>
        </div>
      </div>
    );
  }