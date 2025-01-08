export interface CookieOption {
  label: string;
  enabled: boolean;
  alwaysActive: boolean;
}

export const cookieOptions: CookieOption[] = [
  {
    label: "Necessary Cookies (Always Active)",
    enabled: true,
    alwaysActive: true,
  },
  { label: "Functional Cookies", enabled: false, alwaysActive: false },
  { label: "Analytics Cookies", enabled: false, alwaysActive: false },
  { label: "Advertising Cookies", enabled: false, alwaysActive: false },
];
