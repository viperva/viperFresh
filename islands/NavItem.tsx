/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useEffect, useState } from "preact/hooks";
import { PageProps } from "$fresh/server.ts";

type navItemType = {
  item: {
    displayName: string;
    description: string;
    link: string;
    path: string;
  };
};

export default function Navitem({ item }: navItemType, props: PageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.outerWidth);

  const isMobile = width < 992 ? true : false;
  let timeout = 0;
  const styles = isOpen ? `justify-end sm:w-[50vh]` : "";
  const linkStyles = isOpen ? `top-[90%]` : "";

  function setDimensions() {
    setWidth(window.outerWidth);
  }
  window.onresize = () => {
    clearTimeout(timeout);
    timeout = setTimeout(setDimensions, 200);
  };

  window.onclick = () => {
    setIsOpen(false);
  };

  const id = item.path;

  const buttonClass =
    `h-[fit-content] sm:w-full lg:p-5 sm:h-[fit-content] lg:w-full lg:h-full overflow-hidden bg-black bg-opacity-80 text-white flex flex-col justify-start items-center rounded-b-2xl text-2xl`;

  function clickOff() {
    const navItem = document.getElementById(id);
    console.log(`ELEMENT IS ${navItem}`);
    if (navItem !== null) {
      navItem.onclick = function (event) {
        console.log(`stop propagation on ${event}`);
        event.stopPropagation();
      };
    }
  }
  globalThis.addEventListener("load", clickOff);

  return (
    <div
      style={{
        transition: "all 0.2s ease-in",
        flexBasis: "auto",
      }}
      class={tw`sm:w-[15%] mt-[20vh] lg:w-full lg:h-full ${styles}`}
    >
      {(isOpen && isMobile) &&
        (
          <div class={tw`absolute inset-0 bg-white bg-opacity-0 h-2/3 z-[2]`}>
          </div>
        )}
      <button
        id={id}
        style={{
          outline: "none",
        }}
        {...(isMobile
          ? {
            onClick: () => {
              setIsOpen(!isOpen);
            },
          }
          : {
            onMouseEnter: () => {
              setIsOpen(true);
            },
            onMouseLeave: () => {
              setIsOpen(false);
            },
            onClick: () => {
              location.href = `/${item.path}`;
            },
          })}
        class={tw`${buttonClass}`}
      >
        {isOpen && (
          <div
            class={tw`w-full`}
          >
            <p class={tw`mx-1 my-1 mb-1 sm:text-[1.2rem] lg:text-[2rem]`}>
              {item.description}
            </p>
            <p class={tw`sm:text-[1.2rem] lg:text-[2rem] font-bold`}>
              {item.link}
            </p>
            <img
              class={tw`w-full lg:py-4`}
              style={{ color: "white" }}
              src={`/${item.path}.png`}
            />
          </div>
        )}

        {isMobile
          ? (
            isOpen
              ? (
                <a
                  href={`/${item.path}`}
                  class={tw
                    `text-center mb-4 text-[1.7rem] bg-white text-black bg-opacity-90 rounded-lg px-[1.3rem] py-[0.8rem] font-bold`}
                >
                  {item.displayName}
                </a>
              )
              : (
                <div
                  {...(isOpen ? {} : {
                    style: {
                      writingMode: "vertical-lr",
                      textOrientation: "upright",
                    },
                  })}
                  class={tw`text-center mb-4 text-[1.7rem]`}
                >
                  {item.displayName}
                </div>
              )
          )
          : (
            <div
              class={tw`text-center m-4 text-[3rem]`}
            >
              {item.displayName}
            </div>
          )}
      </button>
    </div>
  );
}
