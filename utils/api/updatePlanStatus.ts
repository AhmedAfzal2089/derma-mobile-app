import { ENVIRONMENT } from "@/constants/environment.constants";
import { UpdatePlanStatusPayload } from "@/models/update-plan-status-payload.model";

export const updatePlanStatus = async (payload: UpdatePlanStatusPayload): Promise<void> => {
  const response = await fetch(`${ENVIRONMENT.API_BASE_URL}/user/update-payment-status`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  console.log("Payload", payload);

  if (!response.ok) {
    const data = await response.json();
    console.log("Error", data.error);
    throw new Error(data.error || "Failed to update payment status");
  }
};
