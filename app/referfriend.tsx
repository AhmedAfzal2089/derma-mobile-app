// app/about.tsx
import { ScrollView } from "react-native";
import ReferralCards from "./pages/refer-a-friend/ReferalCards";
import ReferralHero from "./pages/refer-a-friend/ReferralHero";

export default function AboutScreen() {
  return (
    <ScrollView className="flex-1 bg-white ">
      <ReferralHero />
      <ReferralCards />
    </ScrollView>
  );
}
