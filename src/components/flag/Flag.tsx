import React from "react";
import styles from "./style.module.css";
import { range } from "@/utils/range";
function Flag({ numOfColumns = 10, staggeredDelay = 60 }) {
  return (
    <div className={styles.flag}>
      {range(1, numOfColumns).map((columnIndex) => (
        <div
          key={columnIndex}
          className={styles.column}
          style={{
            animationDelay: columnIndex * staggeredDelay + "ms",
          }}
        />
      ))}
    </div>
  );
}

export default Flag;
