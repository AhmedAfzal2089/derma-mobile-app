import ConsultationCard from "@/components/Home/ConsulationCard";
import ExpertCard from "@/components/Home/ExpertCard";
import HeroSection from "@/components/Home/HeroSection";
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView className="flex-1">
      <HeroSection />
      <ConsultationCard />
      <ExpertCard />
      {/* Add more components below here */}
    </ScrollView>
  );
}
