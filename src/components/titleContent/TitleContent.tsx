import React, { ReactNode } from "react";
import styles from "./style.module.css";

interface TitleContentProps {
  children: ReactNode;
}

export default function TitleContent({ children }: TitleContentProps) {
  return <h1 className={styles.title}>{children}</h1>;
}
