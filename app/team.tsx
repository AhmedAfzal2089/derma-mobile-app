import CoreValuesGrid from "@/components/Common/CoreValuesGrid";
import { ScrollView } from "react-native";
import ExpertiseAndPhilosophy from "./pages/Team/ExpertiseAndPhilosphy";
import TeamHero from "./pages/Team/TeamHero";
import TeamMemberGrid from "./pages/Team/TeamMemberGrid";
import CallToAction from "./pages/about/components/CallToAction";

export default function TeamScreen() {
  return (
    <ScrollView className="flex-1 bg-white ">
      <TeamHero />
      <ExpertiseAndPhilosophy />
      <TeamMemberGrid />
      <CoreValuesGrid />
      <CallToAction />
    </ScrollView>
  );
}
