import { FeatureCard } from "./feature-card";

export const Features: React.FC = () => {
  return (
    <section className="py-10 px-32 w-full h-screen">
      <h1 className="text-3xl font-bold mb-8">Features</h1>
      <FeatureCard />
    </section>
  );
};
