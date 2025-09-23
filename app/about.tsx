// app/about.tsx
import CoreValuesGrid from "@/components/Common/CoreValuesGrid";
import { ScrollView } from "react-native";
import AboutHero from "./pages/about/components/AboutHero";
import CallToAction from "./pages/about/components/CallToAction";
import ExpertiseAndPhilosophy from "./pages/about/components/ExpertiseAndPhilosphy";
import LeadershipBio from "./pages/about/components/LeaderShipBio";

export default function AboutScreen() {
  return (
    <ScrollView className="flex-1 bg-white ">
      <AboutHero />
      <ExpertiseAndPhilosophy />
      <LeadershipBio />
      <CoreValuesGrid />
      <CallToAction />
      {/* <Footer /> */}
    </ScrollView>
  );
}
