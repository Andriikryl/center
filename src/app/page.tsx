import Hero from "@/components/hero/Hero";
import CenterFlex from "@/components/centerFlex/CenterFlex";
import CenterGrid from "@/components/centerGrid/CenterGrid";
import PositionCenter from "@/components/positionCenter/PositionCenter";
import ViewCenter from "@/components/viewCenter/ViewCenter";
import CenterGridM from "@/components/centerGridM/CenterGridM";

export default function Home() {
  return (
    <>
      <Hero />
      <CenterFlex />
      <CenterGrid />
      <CenterGridM />
      <PositionCenter />
      <ViewCenter />
    </>
  );
}
