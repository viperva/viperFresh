/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState } from "preact/hooks";

export default function Footer() {
  const [height, setHeight] = useState(window.innerHeight);
  let timeout = 0;
  function setDimensions() {
    setHeight(window.innerHeight);
  }
  window.ontouchmove = () => {
    clearTimeout(timeout);
    console.log("xd");
    timeout = setTimeout(setDimensions, 200);
  };

  return (
    <footer
      class={tw
        `fixed bottom-1 left-[50%] translate-x-[-50%] text-white opacity-30 sm:text-[1rem] lg:text-[1.5rem]`}
    >
      &#169; 2022 Vipervalour
    </footer>
  );
}
