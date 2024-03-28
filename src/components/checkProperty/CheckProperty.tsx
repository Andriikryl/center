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
          id="opt-in-checkbox"
          checked={initialValue}
          onChange={(event) => {
            setInitialValue(event.target.checked);
          }}
        />
        <label className={styles.label}>{label}</label>
      </form>
    </div>
  );
}
