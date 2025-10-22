export interface UpdatePlanStatusPayload {
  userId: string;
  planName: string;
  paymentStatus: "succeeded" | "failed";
  paymentDetails?: {
    monthlyPrice?: number;
    stripeCustomerId?: string;
    stripeSessionId?: string;
    stripeSubscriptionId?: string;
  };
}
