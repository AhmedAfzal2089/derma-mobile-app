// app/about.tsx
import { ScrollView } from "react-native";
import FAQSection from "../components/ReferFriend/FaqsSection";
import ReferralCards from "../components/ReferFriend/ReferalCards";
import ReferralHero from "../components/ReferFriend/ReferralHero";
import ReferralSteps from "../components/ReferFriend/ReferralSteps";

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
