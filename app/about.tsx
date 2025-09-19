// app/about.tsx
import CoreValuesGrid from "@/components/Common/CoreValuesGrid";
import Footer from "@/components/Common/Footer";
import { ScrollView } from "react-native";
import AboutHero from "./pages/about/components/AboutHero";
import ExpertiseAndPhilosophy from "./pages/about/components/ExpertiseAndPhilosphy";

export default function AboutScreen() {
  return (
    <ScrollView className="flex-1 bg-white ">
      <AboutHero />
      <ExpertiseAndPhilosophy />
      <CoreValuesGrid />
      <Footer />
    </ScrollView>
  );
}
