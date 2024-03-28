"use client";
import React from "react";
import { useRef } from "react";
import {
  MotionValue,
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import styles from "./style.module.css";
import clsx from "clsx";
import Container from "../container/Container";
import Flag from "../flag/Flag";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  }) as MotionValue<number>;
  const scale = useTransform(scrollYProgressSpring, [0, 1], [1, 12]);
  const imageX = useTransform(scrollYProgressSpring, [0, 1], [50, 0]);
  const imageXCalc = useMotionTemplate`max(0px, calc(${imageX}% + calc(${imageX}vw - 300px)))`;

  return (
    <section className={styles.hero}>
      <Container>
        <div ref={ref} className={styles.wrapper}>
          <motion.div
            style={{ scale }}
            className={clsx(styles.wrapper__bg, styles.hero__background)}
          >
            <div className={clsx(styles.prewu, styles.window__mask)}>
              <div className="flex__box">
                <h1 className={styles.title}>How center a div?</h1>
              </div>
              <div className={styles.box} />
            </div>
            <div className={styles.grid__box}>
              <div className={styles.grid__block} />
              <div className={styles.flag__box}>
                <Flag />
              </div>
            </div>
          </motion.div>
        </div>
        <div className={styles.mask}>
          <motion.div
            style={{ x: imageXCalc }}
            className={styles.inner__mask}
          ></motion.div>
        </div>
      </Container>
    </section>
  );
}
