import { STRIPE_CONFIG } from "@/constants/stripe-config.constants";
import { StripeProvider } from "@stripe/stripe-react-native";
import React from "react";

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

export const WithStripeProvider = ({ children }: Props) => (
  <StripeProvider publishableKey={STRIPE_CONFIG.STRIPE_PUBLISHABLE_KEY}>{children}</StripeProvider>
);
