import { ENVIRONMENT } from "@/app/constants/environment.constants";

export const createAppointment = async (payload: any) => {
  try {
      console.log("Appointment Form Data", payload);
    const res = await fetch(`${ENVIRONMENT.API_BASE_URL}/appointment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const responseData = await res.json();

    console.log("Appointment Response Data", responseData);

    if (!res.ok) {
      const error = new Error(responseData.message || "Failed to create appointment") as any;
      error.errorType = responseData.errorType;
      error.statusCode = res.status;
      error.originalReferralCode = responseData.originalReferralCode;
      throw error;
    }

    return responseData;
  } catch (error) {
    console.error("createAppointment error:", error);
    throw error;
  }
};
