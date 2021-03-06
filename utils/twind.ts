import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    extend: {
      keyframes: {
        enter: {
          "0%": {
            transform: "translateY(-500px)",
            "animation-timing-function": "ease-in",
          },
          "38%": {
            transform: " translateY(0)",
            "animation-timing-function": "ease-out",
          },
          "55%": {
            transform: "translateY(-65px)",
            "animation-timing-function": "ease-in",
          },
          "72%": {
            transform: " translateY(0)",
            "animation-timing-function": "ease-out",
          },
          "81%": {
            transform: "translateY(-28px)",
            "animation-timing-function": "ease-in",
          },
          "90%": {
            transform: "translateY(0)",
            "animation-timing-function": "ease-out",
          },
          "95%": {
            transform: "translateY(-8px)",
            "animation-timing-function": "ease-in",
          },
          "100%": {
            transform: "translateY(0)",
            "animation-timing-function": "ease-out",
          },
        },
        wave1: {
          "0%": {
            transform: "translate(0, 0)",
            "animation-timing-function":
              "cubic-bezier(0.4206,-0.0479,0.321,0.965)",
          },
          "50%": {
            transform: "translate(-1990px, 0)",
            "animation-timing-function": "cubic-bezier(0.56,0,0.655,1)",
          },
          "100%": {
            transform: "translate(0,0)",
          },
        },
        wave2: {
          "0%": {
            transform: "translate(-1900px, 0)",
            "animation-timing-function":
              "cubic-bezier(0.4206,-0.0479,0.321,0.965)",
          },
          "50%": {
            transform: "translate(0,0)",
            "animation-timing-function": "cubic-bezier(0.56,0,0.655,1)",
          },
          "100%": {
            transform: "translate(-1900px,0)",
          },
        },
        ballRotate: {
          "0%": {
            "offset-distance": "0%",
            "transform": "rotate(0deg)",
            "animation-timing-function":
              "cubic-bezier(0.445629,0.132127,0.750959,0.494964)",
          },
          "12.7%": {
            "offset-distance": "7.304889%;",
            "animation-timing-function":
              "cubic-bezier(0.357945,0.303844,0.685658,0.63965)",
            "transform": "rotate(100deg)",
          },
          "16%": {
            "offset-distance": "11.285592%;",
            "animation-timing-function":
              "cubic-bezier(0.341896,0.313008,0.66824,0.648803)",
            "transform": "rotate(200deg)",
          },
          "19.3%": {
            "offset-distance": "17.272933%;",
            "animation-timing-function":
              "cubic-bezier(0.307846,0.316583,0.623897,0.65583)",
            "transform": "rotate(300deg)",
          },
          "25%": {
            "offset-distance": "21.030632%",
            "transform": "rotate(400deg)",
          },
          "29.7%": {
            "offset-distance": "26.95488%",
            "transform": "rotate(500deg)",
          },
          "34.4%": {
            "offset-distance": "31.944442%",
            "transform": "rotate(650deg)",
          },
          "38.6%": {
            "offset-distance": "36.323889%",
            "transform": "rotate(700deg)",
          },
          "42.1%": {
            "offset-distance": "40.560529%",
            "transform": "rotate(750deg)",
          },
          "45.5%": {
            "offset-distance": "44.180725%",
            "transform": "rotate(800deg)",
          },
          "50%": {
            "offset-distance": "51.493522%",
            "transform": "rotate(900deg)",
          },
          "56%": {
            "offset-distance": "55.476399%",
            "transform": "rotate(1000deg)",
          },
          "60%": {
            "offset-distance": "60.685059%",
            "transform": "rotate(1100deg)",
          },
          "65.3%": {
            "offset-distance": "67.29924%",
            "transform": "rotate(1200deg)",
          },
          "71%": {
            "offset-distance": "74%",
            "transform": "rotate(1350deg)",
          },
          "100%": {
            "offset-distance": "100%",
            "transform": "rotate(1500deg)",
          },
        },
        sun: {
          "0%": {
            transform: "scale(0.9)",
          },
          "50%": {
            transform: "scale(0.7)",
            "animation-timing-function":
              "cubic-bezier(0.345,-0.06,0.305,1.045)",
          },
          "100%": {
            transform: "scale(0.9)",
          },
        },
      },
      animation: {
        "wiggle": "wiggle 30s linear infinite normal forwards",
        "frontWave": "wave1 60s linear infinite normal forwards",
        "backWave": "wave2 60s linear infinite normal forwards",
        "deadbush": "ballRotate 15s linear infinite normal forwards",
        "sunlight": "sun 10s linear infinite normal forwards",
        "expand": "enter 0.5s cubic-bezier(0.550, 0.055, 0.675, 0.190) both",
      },
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
