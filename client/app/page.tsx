import { Features } from "@/components/features/features";
import { FlowMap } from "@/components/features/flow-map";
import { Hero } from "@/components/home/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <FlowMap />
      <Features />
    </>
  );
}
