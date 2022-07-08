/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
// import { useEffect, useState } from "preact/hooks";

export default function Countdown(props: { itemName: string }) {
  const navItemNameStyle = window.outerWidth < 991
    ? {
      writingMode: "vertical-lr",
      textOrientation: "upright",
      fontSize: "1rem",
    }
    : {};

  return (
    <span
      class={tw`mb-2`}
      style={navItemNameStyle}
    >
      {props.itemName}
    </span>
  );
}
