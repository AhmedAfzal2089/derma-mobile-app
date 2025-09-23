export interface UserProfile {
  id: string;
  Buyinghistory: any[];
  emailVerified: boolean;
  referralCode: string;
  plan: string | null;
  role: string;
  name: string;
  address: string;
  usedReferralCodes: string[];
  phone: string;
  isBanned: boolean;
  referralRewards: number;
  email: string;
  dateOfBirth: Date;
  createdAt: string;
  referrerInfo: any;
  referralDetails: any[];
  referralCount: number;
}
