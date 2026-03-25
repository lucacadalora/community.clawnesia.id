import { CommunityMap } from "../components/CommunityMap";
import { Ecosystem } from "../components/Ecosystem";
import { Footer } from "../components/Footer";
import { FounderLetter } from "../components/FounderLetter";
import { Hero } from "../components/Hero";
import { JoinCTA } from "../components/JoinCTA";
import { Sponsors } from "../components/Sponsors";
import { Testimonials } from "../components/Testimonials";
import { ValueProp } from "../components/ValueProp";

export default function Home() {
  return (
    <main className="page-shell overflow-x-hidden">
      <Hero />
      <ValueProp />
      <CommunityMap />
      <Sponsors />
      <Ecosystem />
      <Testimonials />
      <JoinCTA />
      <FounderLetter />
      <Footer />
    </main>
  );
}
