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

export default function CenterGrid() {
  const [isGrid, setIsGrid] = React.useState(false);
  const [justyCenter, setJustyCenter] = React.useState(false);
  const { createToast } = useContext(ToastContext) as ToastContextValue;
  const boxStyles = {
    display: isGrid ? "grid" : "",
    placeItems: justyCenter ? "center" : "initial",
  };
  useEffect(() => {
    if (isGrid === true && justyCenter === true) {
      createToast("Good job! You center a div!", "success");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGrid, justyCenter]);
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content__box}>
          <TitleContent>Grid</TitleContent>
          <div className={styles.control__group}>
            <CheckProperty
              label="display: grid"
              initialValue={isGrid}
              setInitialValue={setIsGrid}
            />
            <CheckProperty
              label="playes-items:center"
              initialValue={justyCenter}
              setInitialValue={setJustyCenter}
            />
          </div>
          <PalyGround styleProp={boxStyles}>
            <Box motionAct={true} />
          </PalyGround>
        </div>
      </Container>
    </section>
  );
}
