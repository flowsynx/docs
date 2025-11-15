import React, { useState, useEffect } from 'react';
import OriginalDocItem from '@theme-original/DocItem';

export default function DocItemWrapper(props) {
  const [feedback, setFeedback] = useState(null);
  const [comment, setComment] = useState('');

  // Helper to send GA events safely
  const sendGAEvent = (eventName, params) => {
    const interval = setInterval(() => {
      if (window.gtag) {
        window.gtag('event', eventName, params);
        clearInterval(interval);
      }
    }, 100);
  };

  const handleFeedback = (value) => {
    setFeedback(value);

    // Fire GA event safely
    sendGAEvent('helpful_feedback', {
      event_category: 'Doc Feedback',
      event_label: props.content.metadata.permalink,
      helpful: value,
    });
  };

  const handleCommentSubmit = () => {
    console.log('User comment:', comment);

    // Fire GA event for comment
    sendGAEvent('helpful_feedback_comment', {
      event_category: 'Doc Feedback',
      event_label: props.content.metadata.permalink,
      comment,
    });

    alert('Thanks for your comment! ❤️');
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