import css from "./Descrition.module.css";

export default function Descrition() {
  return (
    <div className={css.box}>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
