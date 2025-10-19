import { ENVIRONMENT } from "@/constants/environment.constants";
import { PaymentIntentPayload } from "@/models/payment-intent-payload.model";
import { PaymentIntentResponse } from "@/models/payment-intent-response.model";

export const createPaymentIntent = async (payload: PaymentIntentPayload): Promise<PaymentIntentResponse> => {
  const response = await fetch(`${ENVIRONMENT.API_BASE_URL}/user/create-payment-intent`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  console.log("Payload", payload);

  const data = await response.json();

  console.log("Data", data);
  if (!response.ok) {
    console.log("Error", data.error);
    throw new Error(data.error || "Failed to create payment intent");
  }

  return data;
};
