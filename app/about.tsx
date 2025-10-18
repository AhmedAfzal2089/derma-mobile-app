// app/about.tsx
import CoreValuesGrid from "@/components/Common/CoreValuesGrid";
import { ScrollView } from "react-native";
import AboutHero from "../components/About/AboutHero";
import CallToAction from "../components/About/CallToAction";
import ExpertiseAndPhilosophy from "../components/About/ExpertiseAndPhilosphy";
import LeadershipBio from "../components/About/LeaderShipBio";

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
