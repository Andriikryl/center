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
import { useStickyState } from "@/hooks/useStickyState";
import CodeSnep from "../codeSnep/CodeSnep";

export default function CenterFlex() {
  const [isFlex, seIsFlex] = useStickyState(false, "isFlex");
  const [justyCenter, setJustyCenter] = useStickyState(false, "justyCenter");
  const [isAlignCenter, setIsAlignCenter] = useStickyState(
    false,
    "isAlignCenter"
  );
  const { createToast } = useContext(ToastContext) as ToastContextValue;

  const boxStyles = {
    display: isFlex ? "grid" : "",
    justifyContent: justyCenter ? "center" : "initial",
    alignItems: isAlignCenter ? "center" : "initial",
  };

  useEffect(() => {
    if (justyCenter === true && isAlignCenter === true && isFlex) {
      createToast("Good job! You center a div!", "success");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [justyCenter, isAlignCenter, isFlex]);
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content__box}>
          <TitleContent>Flex</TitleContent>
          <div className={styles.control__group}>
            <CodeSnep text=".container" codeType="open" />
            <CheckProperty
              label="display: flex"
              initialValue={isFlex}
              setInitialValue={seIsFlex}
            />
            <CheckProperty
              label="justypy-content: center"
              initialValue={justyCenter}
              setInitialValue={setJustyCenter}
            />
            <CheckProperty
              label="alie-items: center"
              initialValue={isAlignCenter}
              setInitialValue={setIsAlignCenter}
            />
            <CodeSnep codeType="closed" />
          </div>
          <PalyGround styleProp={boxStyles}>
            <Box motionAct={true} />
          </PalyGround>
        </div>
      </Container>
    </section>
  );
}
