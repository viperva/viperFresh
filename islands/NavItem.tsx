/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
// import { useEffect, useState } from "preact/hooks";

export default function Navitem(props: { itemName: string }) {
  const navItemNameStyle = window.outerWidth < 991
    ? {
      writingMode: "vertical-lr",
      textOrientation: "upright",
    }
    : {};

  return (
    <span
      class={tw`sm:mb-2 sm:text-[1.2rem] lg:text-[1.7rem]`}
      style={navItemNameStyle}
    >
      {props.itemName}
    </span>
  );
}
