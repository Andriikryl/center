import React from "react";
import styles from "./style.module.css";

interface InputCheckProps {
  label: string;
  initialValue: boolean;
  setInitialValue: (value: boolean) => void;
}

export default function CheckProperty({
  initialValue,
  setInitialValue,
  label,
}: InputCheckProps) {
  const id = React.useId();
  const inputCheckId = `${id}-username`;
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className={styles.form}
      >
        <input
          className={styles.input}
          type="checkbox"
          id={inputCheckId}
          checked={initialValue}
          onChange={(event) => {
            setInitialValue(event.target.checked);
          }}
        />
        <label htmlFor={inputCheckId} className={styles.label}>
          {label}
        </label>
      </form>
    </div>
  );
}
