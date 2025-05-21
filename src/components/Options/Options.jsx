import css from "./Options.module.css";

export default function Options({ updateFeedback, onReset, totalFeedback }) {
  return (
    <div className={css.box}>
      <ul className={css.list}>
        <li className={css.button}>
          <button onClick={() => updateFeedback("good")}>Good</button>
        </li>
        <li className={css.button}>
          <button onClick={() => updateFeedback("neutral")}>Neutral</button>
        </li>
        <li className={css.button}>
          <button onClick={() => updateFeedback("bad")}>Bad</button>
        </li>
        {totalFeedback > 0 && (
          <li className={css.button}>
            <button onClick={() => onReset("reset")}>Reset</button>
          </li>
        )}
      </ul>
    </div>
  );
}
