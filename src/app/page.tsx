import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import CenterFlex from "@/components/centerFlex/CenterFlex";
import Code from "@/components/code/Code";
import Container from "@/components/container/Container";
import CenterGrid from "@/components/centerGrid/CenterGrid";
import PositionCenter from "@/components/positionCenter/PositionCenter";
import ViewCenter from "@/components/viewCenter/ViewCenter";

export default function Home() {
  return (
    <>
      <Hero />
      <CenterFlex />
      <Container>
        {/* <Code
          code={`.center{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            `}
          lang="css"
          theme="github-dark"
        /> */}
        <CenterGrid />
        <PositionCenter />
        <ViewCenter />
      </Container>
    </>
  );
}
