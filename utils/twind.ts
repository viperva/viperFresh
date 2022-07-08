import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    extend: {
      backgroundImage: {
        "desert": "url('/back.svg')",
      },
      fontFamily: {
        "viper": ["inconsolata"],
      },
    },
    screens: {
      "sm": { "max": "991px" },
      "lg": { "min": "992px" },
    },
  },
};

if (IS_BROWSER) setup(config);
