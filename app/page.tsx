import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";
import { Scene } from "@/components/three/Scene";

export default function Home() {
  return (
    <>
      <Scene />
      <Header />
      <main>
        <Hero />
        <Work />
      </main>
    </>
  );
}