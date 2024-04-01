"use client";
import React, { useContext, useEffect } from "react";
import Container from "../container/Container";
import styles from "./style.module.css";
import PalyGround from "../playGround/PalyGround";
import Box from "../box/Box";
import CheckProperty from "../checkProperty/CheckProperty";
import {
  ToastContext,
  ToastContextValue,
} from "../ToastProvider/ToastProvider";
import TitleContent from "../titleContent/TitleContent";
import CodeSnep from "../codeSnep/CodeSnep";

export default function CenterGridM() {
  const [isGrid, setIsGrid] = React.useState(false);
  const [isMargin, setIsMargin] = React.useState(false);
  const { createToast } = useContext(ToastContext) as ToastContextValue;
  const boxStyles = {
    margin: isMargin ? "auto" : "",
  };
  const playGroundStyle = {
    display: isGrid ? "grid" : "",
  };
  useEffect(() => {
    if (isGrid === true && isMargin === true) {
      createToast("Good job! You center a div!", "success");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGrid, isMargin]);
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content__box}>
          <TitleContent>
            Grid /<br />
            margin
          </TitleContent>
          <div className={styles.control__group}>
            <CodeSnep text=".container" codeType="open" />
            <CheckProperty
              label="display: grid"
              initialValue={isGrid}
              setInitialValue={setIsGrid}
            />
            <CodeSnep codeType="closed" />
            <CodeSnep text=".box" codeType="open" />
            <CheckProperty
              label="margin:auto"
              initialValue={isMargin}
              setInitialValue={setIsMargin}
            />
            <CodeSnep codeType="closed" />
          </div>
          <PalyGround styleProp={playGroundStyle}>
            <Box motionAct={true} styleProp={boxStyles} />
          </PalyGround>
        </div>
      </Container>
    </section>
  );
}
