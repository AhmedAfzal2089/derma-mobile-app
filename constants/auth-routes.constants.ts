export const AuthTabs = {
  LOGIN: "login",
  SIGNUP: "signup",
  FORGOT: "forgot",
} as const;

export type AuthTab = (typeof AuthTabs)[keyof typeof AuthTabs];
