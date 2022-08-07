import { useState } from 'react';

const Feedback = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [messageStatus, setMessageStatus] = useState('');

  /* Feedback Method */
  const feedbackReset = useCallback(() => {
    setError(false);
    setLoading(false);
    setMessageStatus('');
    setFeedbackMessage('');
  }, [error, loading, feedbackMessage, messageStatus]);

  const feedback = useCallback(
    (
      messageStatus = 'info',
      messageFeedback = 'Something Went Wrong',
      focusElement
    ) => {
      if (focusElement) {
        focusElement.focus();
      }

      setLoading(true);
      setError(true);
      setMessageStatus(messageStatus);
      setFeedbackMessage(messageFeedback);
    }
  );

  useEffect(() => {
    feedbackReset();
  }, [feedbackMessage]);

  return {
    feedbackReset,
    feedback,
    error,
    loading,
  };
};

export default Feedback;
