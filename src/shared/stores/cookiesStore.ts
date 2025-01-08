import { ref } from "vue";
import { defineStore } from "pinia";
import { cookieOptions } from "../interfaces/cookies";
import { CookieOption } from "../interfaces/cookies";
import { getSavedCookies } from "../helpers/get-saved-cookies";

export const useCookiesStore = defineStore("cookies", () => {
  // Properties
  const customize = ref<boolean>(false);
  const savedOptions = getSavedCookies();
  const options = ref<CookieOption[]>(
    savedOptions ? JSON.parse(savedOptions) : cookieOptions
  );
  const show = ref<boolean>(!savedOptions); //we don't show the banner if the user has already saved their preferences
  const selectedOption = ref<string>(
    options.value.find((option) => !option.alwaysActive)?.label || ""
  );

  const setAllCookies = (value: boolean) => {
    options.value.forEach((option) => {
      if (!option.alwaysActive) {
        option.enabled = value;
      }
    });
    selectedOption.value =
      options.value.find((option) => value && !option.alwaysActive)?.label ||
      "";
  };

  const acceptAllCookies = () => {
    setAllCookies(true);
    savePreferences();
  };

  const declineAllCookies = () => {
    setAllCookies(false);
    savePreferences();
  };

  const customizePreferences = () => {
    customize.value = true;
  };

  const savePreferences = () => {
    localStorage.setItem("cookieOptions", JSON.stringify(options.value));
    show.value = false;
  };

  return {
    show,
    customize,
    options,
    selectedOption,
    acceptAllCookies,
    declineAllCookies,
    customizePreferences,
    savePreferences,
  };
});
