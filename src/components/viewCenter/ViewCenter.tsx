"use client";
import React from "react";
import Container from "../container/Container";
import styles from "./style.module.css";
import PalyGround from "../playGround/PalyGround";
import Box from "../box/Box";
import CheckProperty from "../checkProperty/CheckProperty";
import TitleContent from "../titleContent/TitleContent";

export default function ViewCenter() {
  const [isRelative, setIsRelative] = React.useState(false);
  const [isAbsolute, setIsAbsolute] = React.useState(false);
  const [isInset, setIsInset] = React.useState(false);
  const [isMargin, setIsMargin] = React.useState(false);
  const boxStyles = {
    position: isAbsolute ? "absolute" : "",
    inset: isInset ? "0px" : "",
    margin: isMargin ? "auto" : "",
  } as React.CSSProperties;
  const playGroundStyles = {
    position: isRelative ? "relative" : "",
  } as React.CSSProperties;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content__box}>
          <TitleContent>Position / margin</TitleContent>
          <div className={styles.control__group}>
            <CheckProperty
              label="position: realative;"
              initialValue={isRelative}
              setInitialValue={setIsRelative}
            />
            <CheckProperty
              label="position: absolute;"
              initialValue={isAbsolute}
              setInitialValue={setIsAbsolute}
            />
            <CheckProperty
              label="inset: 0px;"
              initialValue={isInset}
              setInitialValue={setIsInset}
            />
            <CheckProperty
              label="margin: auto;"
              initialValue={isMargin}
              setInitialValue={setIsMargin}
            />
          </div>
          <PalyGround styleProp={playGroundStyles}>
            <Box motionAct={false} styleProp={boxStyles} />
          </PalyGround>
        </div>
      </Container>
    </section>
  );
}
