import { useState } from "react";
import Feedback from "../../Feedback/Feedback";
import Options from "../../Options/Options";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Feedback />
      <Options />
    </div>
  );
}
