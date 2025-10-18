import CoreValuesGrid from "@/components/Common/CoreValuesGrid";
import { ScrollView } from "react-native";
import CallToAction from "../components/About/CallToAction";
import ExpertiseAndPhilosophy from "../components/Team/ExpertiseAndPhilosphy";
import TeamHero from "../components/Team/TeamHero";
import TeamMemberGrid from "../components/Team/TeamMemberGrid";

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
