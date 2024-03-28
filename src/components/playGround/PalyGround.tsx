"use client";
import React, { ReactNode } from "react";
import styles from "./style.module.css";
import clsx from "clsx";
import { motion } from "framer-motion";
interface PlayGroundProps {
  children?: ReactNode;
  styleProp?: React.CSSProperties;
}

export default function PalyGround({ children, styleProp }: PlayGroundProps) {
  return (
    <div className={styles.container}>
      <div className={styles.rgaph__rows}>
        <div className={styles.inner__ItemRows__graph}>
          <span className={styles.value}>heigth: 300px</span>
        </div>
      </div>
      <motion.div className={clsx(styles.wrapper)} style={styleProp}>
        {children}
      </motion.div>
      <div className={styles.rgaph__columns}>
        <div className={styles.inner__Item__graph}>
          <span className={styles.value}>width:100%</span>
        </div>
      </div>
    </div>
  );
}
