import React, { useEffect, useState } from 'react';
import styles from './GitHubContributors.module.css';

interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

interface GitHubContributorsProps {
  owner: string;
  repo: string;
}

const GitHubContributors: React.FC<GitHubContributorsProps> = ({ owner, repo }) => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors`);
        if (!response.ok) {
          throw new Error('Failed to fetch contributors');
        }
        const data: Contributor[] = await response.json();
        setContributors(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, [owner, repo]);

  if (loading) return <p>Loading contributors...</p>;
  if (!contributors.length) return <p>No contributors found.</p>;

  return (
    <div className={styles.contributorsGrid}>
      {contributors.map((c) => (
        <div key={c.id} className={styles.contributorCard}>
          <a href={c.html_url} target="_blank" rel="noopener noreferrer">
            <img
              src={c.avatar_url}
              alt={c.login}
              className={styles.contributorAvatar}
            />
          </a>
          <p className={styles.contributorName}>{c.login}</p>
        </div>
      ))}
    </div>
  );  
};

export default GitHubContributors;