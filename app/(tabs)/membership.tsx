import React from "react";
import { ScrollView } from "react-native";
import ExperienceExcellenceSection from "../../components/Membership/ExperienceExcellence";
import MembershipHero from "../../components/Membership/MembershipHero";
import MembershipTerms from "../../components/Membership/MembershipTerms";
import MembershipBenefits from "../../components/Membership/MembeshipBenifits";
import MembershipTiers from "../../components/Membership/MembeshipTiers";

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
