/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import NavItem from "../islands/NavItem.tsx";
import Desert from "../islands/Back.tsx";

export default function Home() {
  const navItems = [
    {
      displayName: "Store",
      description:
        "Selling art in form of merchendise. Quick, get it before it's gone!",
      path: "store",
    },
    {
      displayName: "About",
      description:
        "Few words about me, this is a personal website after all...",
      path: "about",
    },
    {
      displayName: "Contact",
      description:
        "Wanna reach out, collab or just give me some free money? Get in touch!",
      path: "contact",
    },
    {
      displayName: "Gallery",
      description:
        "Real paintings and digital art here! Come see, watching is free, no touching tho!",
      path: "gallery",
    },
    {
      displayName: "Blog",
      description:
        "Some of my horrendous thoughts and activities. Check what the freak is up to...",
      path: "blog",
    },
  ];

  return (
    <div class={tw`w-screen font-mono h-screen`}>
      <div class={tw`absolute z-[-1] h-[100vh] overflow-hidden`}>
        <Desert />
      </div>
      <div
        class={tw
          `bg-black w-full h-1/5 flex justify-center items-center bg-opacity-90`}
      >
        <img
          class={tw`h-4/5`}
          src="/tytul.gif"
        />
      </div>
      <div class={tw`flex flex-row h-[80vh]`}>
        {navItems.map((navItem) => {
          return (
            <div
              class={tw
                `lg:px-5 lg:w-1/5 lg:h-20 sm:w-1/5 sm:h-1/3 lg:hover:h-[80vh] sm:hover:w-full sm:hover:h-[80vh] transition-height overflow-hidden bg-black bg-opacity-80 text-white flex flex-col justify-end items-center rounded-b-2xl text-2xl cursor-pointer`}
            >
              <div class={tw`w-full`}>
                <p class={tw`my-4`}>{navItem.description}</p>
                <img
                  class={tw`w-full my-4`}
                  style={{ color: "white" }}
                  src={`/${navItem.path}.png`}
                />
              </div>
              <div
                class={tw`flex items-end justify-end lg:mt-8 lg:m-5`}
              >
                <NavItem itemName={navItem.displayName} />
              </div>
            </div>
          );
        })}
      </div>
      <footer
        class={tw
          `absolute bottom-1 left-[50%] translate-x-[-50%] text-white opacity-30 sm:text-[1rem] lg:text-[1.5rem]`}
      >
        &#169; 2022 Vipervalour
      </footer>
    </div>
  );
}
