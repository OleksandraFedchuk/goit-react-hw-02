import { useEffect, useState } from "react";
import Descrition from "../Description/Descrition";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import "./App.css";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((feedback) => ({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    }));
  };

  const onReset = () => setFeedback({ good: 0, bad: 0, neutral: 0 });
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedbacks");
    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("saved-feedbacks", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <Descrition />
      <Options
        updateFeedback={updateFeedback}
        onReset={onReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          bad={feedback.bad}
          neutral={feedback.neutral}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
