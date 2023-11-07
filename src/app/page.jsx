import { Computer, Hero, Section3D } from "./componets";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Computer />
      <Section3D />
    </main>
  );
}
