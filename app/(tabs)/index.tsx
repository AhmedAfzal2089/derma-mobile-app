import ImageCarousel from "@/components/Home/ImageCarousel";
import TreatmentCarousel from "@/components/Treatments/TreatmentCarousel";
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView className="flex-1 gap-20">
      <ImageCarousel />
      <TreatmentCarousel />
      {/* <HeroSection />
      <ConsultationCard />
      <ExpertCard />
      <TreatmentsGrid />
      <ConsultationSteps />
      <ReviewsCarousel />
      <HomePageGalleryPreview />
      <ReferralSection />
      <MembershipCard />
      <RecentBlogs /> */}
    </ScrollView>
  );
}
