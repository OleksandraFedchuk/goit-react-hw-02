import { useState } from "react";
import Descrition from "../../Description/Descrition";
import Feedback from "../../Feedback/Feedback";
import Options from "../../Options/Options";
import "./App.css";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div>
      <Descrition />
      <Feedback />
      <Options />
    </div>
  );
}
