"use client";
import { motion } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";
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
        <motion.div layout className={styles.box} style={styleProp}>
          <Tooltip.Provider delayDuration={120} skipDelayDuration={500}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <div className={styles.inner__box}>
                  <span className={styles.box__class}>.box</span>
                </div>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className={styles.TooltipContent}
                  sideOffset={5}
                >
                  <span className={styles.content}>width:80px</span>
                  <span className={styles.content}>height:80px</span>
                  <Tooltip.Arrow className={styles.TooltipArrow} />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </motion.div>
      ) : (
        <div className={styles.box} style={styleProp}>
          <Tooltip.Provider delayDuration={120} skipDelayDuration={500}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <div className={styles.inner__box}>
                  <span className={styles.box__class}>.box</span>
                </div>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className={styles.TooltipContent}
                  sideOffset={5}
                >
                  <span className={styles.content}>width:80px</span>
                  <span className={styles.content}>height:80px</span>
                  <Tooltip.Arrow className={styles.TooltipArrow} />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
      )}
    </>
  );
}
