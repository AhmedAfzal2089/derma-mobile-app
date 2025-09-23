export interface Appointment {
  treatment: string;
  treatmentOption: string;
  clientType: string;
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  additionalInfo: string;
  ageConfirm: boolean;
  newsletter: boolean;
  referralCode: string;
  treatmentDetails: {
    treatmentId: string;
    treatmentName: string;
    optionId: string;
    optionName: string;
    optionPrice: string;
    optionDescription: string;
  };
  clinic: string;
  userId: string;
  status: string;
  createdAt: string;
}
