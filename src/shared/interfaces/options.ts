export type Option = {
  value: string;
  label: string;
  icon?: string;
};

export const OPTION_VALUES: Option[] = [
  { value: "", label: "No order", icon: "fa-solid fa-ban" },
  {
    value: "alphabetical-asc",
    label: "Alphabetical (A-Z)",
    icon: "fa-solid fa-sort-alpha-down",
  },
  {
    value: "alphabetical-desc",
    label: "Alphabetical (Z-A)",
    icon: "fa-solid fa-sort-alpha-up",
  },
  {
    value: "quality-asc",
    label: "Quality (Low to High)",
    icon: "fa-regular fa-star",
  },
  {
    value: "quality-desc",
    label: "Quality (High to Low)",
    icon: "fa-solid fa-star",
  },
];
