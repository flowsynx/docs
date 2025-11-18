import React, { useState } from 'react';
import OriginalDocItem from '@theme-original/DocItem';
import type { Props } from '@theme/DocItem';

export default function DocItemWrapper(props: Props) {
  const [feedback, setFeedback] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  const sendGAEvent = (eventName: string, params: Record<string, any>) => {
    const interval = setInterval(() => {
      if ((window as any).gtag) {
        (window as any).gtag('event', eventName, params);
        clearInterval(interval);
      }
    }, 200);
  };

  const handleFeedback = (value: 'yes' | 'no') => {
    setFeedback(value);

    sendGAEvent('doc_feedback', {
      doc_permalink: props.content.metadata.permalink,
      helpful: value === 'yes' ? 1 : 0,
    });
  };

  const handleCommentSubmit = () => {
    console.log('User comment:', comment);

    sendGAEvent('doc_feedback_comment', {
      doc_permalink: props.content.metadata.permalink,
      has_comment: 1,
    });

    setFeedback('no-commented');
  };

  return (
    <>
      <OriginalDocItem {...props} />

      <div style={{ marginTop: '2rem', padding: '1rem 0', borderTop: '1px solid #e0e0e0' }}>
        {feedback === null ? (
          <>
            <p style={{ fontWeight: 'bold' }}>Was this helpful?</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}
                onClick={() => handleFeedback('yes')}
                className='button button--outline button--primary'
              >
                👍 Yes
              </button>
              <button
                style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}
                onClick={() => handleFeedback('no')}
                className='button button--outline button--primary'
              >
                👎 No
              </button>
            </div>
          </>
        ) : feedback === 'no' ? (
          <div style={{ marginTop: '1rem' }}>
            <p>We're sorry to hear that. Can you tell us why?</p>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              className='feedback-comment-box'
              style={{ width: '100%', padding: '0.5rem', fontSize: '14px', marginBottom: '0.5rem' }}
            />
            <div>
              <button
                style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}
                onClick={handleCommentSubmit}
                disabled={!comment.trim()}
                className='button button--outline button--primary'
              >
                Submit Comment
              </button>
            </div>
          </div>
        ) : (
          <p>Thanks for your feedback! ❤️</p>
        )}
      </div>
    </>
  );
}