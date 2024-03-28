import React from "react";
import styles from "./style.module.css";

type codeTypeProps = "open" | "closed";

export default function CodeSnep({
  text,
  codeType,
}: {
  text?: string;
  codeType: codeTypeProps;
}) {
  return (
    <>
      {codeType === "open" ? (
        <span className={styles.code__snep}>{text} &#123;</span>
      ) : (
        <span className={styles.code__snep}>&#125;</span>
      )}
    </>
  );
}
