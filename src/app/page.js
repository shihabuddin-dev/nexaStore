import Faqs from "@/components/Faqs";
import FeaturesProducts from "@/components/FeaturesProducts";
import Hero from "@/components/Hero";
import SupportSection from "@/components/SupportSection";

export default function Home() {
  return (
    <div className="font-sans b-18">
      <Hero />
      <FeaturesProducts/>
      <Faqs/>
      <SupportSection/>
    </div>
  );
}
