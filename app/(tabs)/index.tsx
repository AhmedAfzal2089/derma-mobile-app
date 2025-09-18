import ConsultationCard from "@/components/Home/ConsulationCard";
import HeroSection from "@/components/Home/HeroSection";
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView className="flex-1">
      <HeroSection />
      <ConsultationCard />
      {/* Add more components below here */}
    </ScrollView>
  );
}
