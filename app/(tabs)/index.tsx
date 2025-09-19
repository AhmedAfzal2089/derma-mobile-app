import Footer from "@/components/Common/Footer";
import AsFeaturedIn from "@/components/Home/AsFeaturedIn";
import ConsultationCard from "@/components/Home/ConsulationCard";
import ConsultationSteps from "@/components/Home/ConsultationSteps";
import ExpertCard from "@/components/Home/ExpertCard";
import HeroSection from "@/components/Home/HeroSection";
import MembershipCard from "@/components/Home/MembershipCard";
import RecentBlogs from "@/components/Home/RecentBlogs";
import ReferralSection from "@/components/Home/RefferalSection";
import TreatmentsGrid from "@/components/Home/TreatmentsGrid";
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView className="flex-1 mb-18">
      <HeroSection />
      <ConsultationCard />
      <ExpertCard />
      <TreatmentsGrid />
      <ConsultationSteps />
      <ReferralSection />
      <MembershipCard />
      <RecentBlogs />
      <AsFeaturedIn />
      <Footer />
      {/* Add more components below here */}
    </ScrollView>
  );
}
