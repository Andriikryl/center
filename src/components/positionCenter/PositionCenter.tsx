"use client";
import React from "react";
import Container from "../container/Container";
import styles from "./style.module.css";
import PalyGround from "../playGround/PalyGround";
import Box from "../box/Box";
import CheckProperty from "../checkProperty/CheckProperty";
import TitleContent from "../titleContent/TitleContent";

export default function PositionCenter() {
  const [isRelative, setIsRelative] = React.useState(false);
  const [isAbsolute, setIsAbsolute] = React.useState(false);
  const [isTop, setIsTop] = React.useState(false);
  const [isLeft, setIsLaft] = React.useState(false);
  const [isTransform, setIsTransform] = React.useState(false);
  const boxStyles = {
    position: isAbsolute ? "absolute" : "",
    top: isTop ? "50%" : "",
    left: isLeft ? "50%" : "",
    transform: isTransform ? "translate(-50%, -50%)" : "",
  } as React.CSSProperties;
  const playGroundStyles = {
    position: isRelative ? "relative" : "",
  } as React.CSSProperties;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content__box}>
          <TitleContent>Position</TitleContent>
          <div className={styles.control__group}>
            <CheckProperty
              label="position: realative"
              initialValue={isRelative}
              setInitialValue={setIsRelative}
            />
            <CheckProperty
              label="position: absolute"
              initialValue={isAbsolute}
              setInitialValue={setIsAbsolute}
            />
            <CheckProperty
              label="top: 50%;"
              initialValue={isTop}
              setInitialValue={setIsTop}
            />
            <CheckProperty
              label="left: 50%;"
              initialValue={isLeft}
              setInitialValue={setIsLaft}
            />
            <CheckProperty
              label="transform: translate(-50%, -50%)"
              initialValue={isTransform}
              setInitialValue={setIsTransform}
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