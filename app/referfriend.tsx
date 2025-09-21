// app/about.tsx
import { ScrollView } from "react-native";
import FAQSection from "./pages/refer-a-friend/FaqsSection";
import ReferralCards from "./pages/refer-a-friend/ReferalCards";
import ReferralHero from "./pages/refer-a-friend/ReferralHero";
import ReferralSteps from "./pages/refer-a-friend/ReferralSteps";

export default function AboutScreen() {
  return (
    <ScrollView className="flex-1 bg-white ">
      <ReferralHero />
      <ReferralCards />
      <ReferralSteps />
      <FAQSection />
    </ScrollView>
  );
}
