import ConsultationCard from "@/components/Home/ConsulationCard";
import ConsultationSteps from "@/components/Home/ConsultationSteps";
import ExpertCard from "@/components/Home/ExpertCard";
import HomePageGalleryPreview from "@/components/Home/GallerySection";
import HeroSection from "@/components/Home/HeroSection";
import MembershipCard from "@/components/Home/MembershipCard";
import RecentBlogs from "@/components/Home/RecentBlogs";
import ReferralSection from "@/components/Home/RefferalSection";
import ReviewsCarousel from "@/components/Home/ReviewCarousel";
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
      <ReviewsCarousel />
      <HomePageGalleryPreview />
      <ReferralSection />
      <MembershipCard />
      <RecentBlogs />
    </ScrollView>
  );
}
