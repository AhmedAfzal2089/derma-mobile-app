import ConsultationCard from "@/components/Home/ConsulationCard";
import ExpertCard from "@/components/Home/ExpertCard";
import HeroSection from "@/components/Home/HeroSection";
import TreatmentsGrid from "@/components/Home/TreatmentsGrid";
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView className="flex-1">
      <HeroSection />
      <ConsultationCard />
      <ExpertCard />
      <TreatmentsGrid />
      {/* Add more components below here */}
    </ScrollView>
  );
}
