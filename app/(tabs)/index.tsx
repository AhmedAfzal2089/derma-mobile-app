import ConsultationCard from "@/components/Home/ConsulationCard";
import ConsultationSteps from "@/components/Home/ConsultationSteps";
import ExpertCard from "@/components/Home/ExpertCard";
import HeroSection from "@/components/Home/HeroSection";
import MembershipCard from "@/components/Home/MembershipCard";
import ReferralSection from "@/components/Home/RefferalSection";
import TreatmentsGrid from "@/components/Home/TreatmentsGrid";
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView className="flex-1">
      <HeroSection />
      <ConsultationCard />
      <ExpertCard />
      <TreatmentsGrid />
      <ConsultationSteps />
      <ReferralSection />
      <MembershipCard />
      {/* Add more components below here */}
    </ScrollView>
  );
}
