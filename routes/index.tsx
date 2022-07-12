/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import NavItem from "../islands/NavItem.tsx";
import Desert from "../islands/Back.tsx";
import Footer from "../islands/Footer.tsx";
import { useEffect, useState } from "preact/hooks";

export default function Home() {
  const navItems = [
    {
      displayName: "STORE",
      description: "Selling art in form of merchendise.",
      link: "QUICK, GET IT!",
      path: "store",
    },
    {
      displayName: "CONTACT",
      description: "Wanna reach out, collab or just give me some free money?",
      link: "CALL ME!",
      path: "contact",
    },
    {
      displayName: "ABOUT",
      description:
        "Few words about me, this is a personal website after all...",
      link: "READ UP!",
      path: "about",
    },
    {
      displayName: "GALLERY",
      description: "Real paintings and digital art here!",
      link: "NO TOUCHING!",
      path: "gallery",
    },
    {
      displayName: "BLOG",
      description:
        "My horrendous thoughts and activities. What's the freak up to?",
      link: "CHECK IT!",
      path: "blog",
    },
  ];

  return (
    <div id="body" class={tw`w-screen font-mono h-screen`}>
      <div
        id="background"
        class={tw`absolute z-[-1] h-[100vh] overflow-hidden`}
      >
        <Desert /> {/*id="navigation-item" */}
      </div>
      <div
        id="logo-container"
        class={tw
          `absolute z-[1] bg-black w-full h-[20vh] flex justify-center items-center bg-opacity-90`}
      >
        <img
          id="logo"
          class={tw`h-4/5`}
          src="/tytul.gif"
        />
      </div>
      <div
        id="navigation"
        class={tw`flex flex-row justify-center gap-2`}
      >
        {navItems.map((navItem) => {
          return (
            <NavItem
              //id="navigation-item"
              item={navItem}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
