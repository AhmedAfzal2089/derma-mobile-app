import React from "react";
import { ScrollView } from "react-native";
import ExperienceExcellenceSection from "./pages/membership/components/ExperienceExcellence";
import MembershipHero from "./pages/membership/components/MembershipHero";
import MembershipTerms from "./pages/membership/components/MembershipTerms";
import MembershipBenefits from "./pages/membership/components/MembeshipBenifits";
import MembershipTiers from "./pages/membership/components/MembeshipTiers";

const Membership = () => {
  return (
    <ScrollView className="flex-1 bg-white ">
      <MembershipHero />
      <MembershipBenefits />
      <MembershipTiers />
      <MembershipTerms />
      <ExperienceExcellenceSection />
      {/* <Footer /> */}
    </ScrollView>
  );
};

export default Membership;
