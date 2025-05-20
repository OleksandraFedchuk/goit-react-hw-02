// import css from "./Options.module.css";

export default function Options({ updateFeedback, onReset, totalFeedback }) {
  return (
    <div>
      <ul>
        <li>
          <button onClick={() => updateFeedback("good")}>Good</button>
        </li>
        <li>
          <button onClick={() => updateFeedback("neutral")}>Neutral</button>
        </li>
        <li>
          <button onClick={() => updateFeedback("bad")}>Bad</button>
        </li>
        {totalFeedback > 0 && (
          <li>
            <button onClick={() => onReset("reset")}>Reset</button>
          </li>
        )}
      </ul>
    </div>
  );
}
