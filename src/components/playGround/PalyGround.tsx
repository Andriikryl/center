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
    <motion.div className={clsx(styles.wrapper)} style={styleProp}>
      {children}
    </motion.div>
  );
}
