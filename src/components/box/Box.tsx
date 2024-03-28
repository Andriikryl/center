"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import React from "react";
import styles from "./style.module.css";

interface BoxProps {
  styleProp?: React.CSSProperties;
  motionAct: boolean;
}

export default function Box({ styleProp, motionAct }: BoxProps) {
  return (
    <>
      {motionAct ? (
        <motion.div
          layout
          className={styles.box}
          style={styleProp}
        ></motion.div>
      ) : (
        <div className={styles.box} style={styleProp}></div>
      )}
    </>
  );
}
