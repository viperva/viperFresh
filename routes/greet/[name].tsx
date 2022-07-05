/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";

// export const handler: Handlers = {
//   GET(req) {
//     const uuid = crypto.randomUUID();
//     return new Response("siemka", {
//       headers: { "Content-Type": "application/json" },
//     });
//   },
// };

export default function Greet(props: PageProps) {
  return <div>Hello {props.params.name}</div>;
}