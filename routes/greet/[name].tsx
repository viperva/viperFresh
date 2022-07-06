/** @jsx h */
import { Fragment, h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

  const routes = [
    ["PHX", "LAX"],
    ["PHX", "JFK"],
    ["JFK", "OKC"],
    ["JFK", "HEL"],
    ["JFK", "LOS"],
    ["MEX", "LAX"],
    ["MEX", "BKK"],
    ["MEX", "LIM"],
    ["MEX", "EZE"],
    ["LIM", "BKK"],
  ];

  const adjencyList = new Map();

  type airport = string;

  function addNode(airport: airport) {
    adjencyList.set(airport, []);
  }

  function addEdge(origin: airport, destination: airport) {
    adjencyList.get(origin).push(destination);
    adjencyList.get(destination).push(origin);
  }

  airports.forEach(addNode);
  routes.forEach((route) => {
    const readRoute = [route[0], route[1]] as const;
    addEdge(...readRoute);
  });

  console.log(adjencyList);

  function bfs(start: string) {
    const queue = [start];

    const visited = new Set();

    while (queue.length > 0) {
      const destinations = adjencyList.get(queue.shift());

      for (const destination of destinations) {
        if (destination === "BKK") {
          console.log("found bangkok");
        }

        if (!visited.has(destination)) {
          visited.add(destination);
          queue.push(destination);
          console.log(destination);
        }
      }
    }
  }

  bfs("PHX");

  let steps = 0;
  function dfs(start: airport, visited = new Set()) {
    console.log(start);
    steps++;
    visited.add(start);

    const destinations = adjencyList.get(start);

    for (const destination of destinations) {
      if (destination === "BKK") {
        console.log(`bangkok found in ${steps} steps`);
        steps = 0;
        return;
      }
      if (!visited.has(destination)) {
        dfs(destination, visited);
      }
    }
  }

  dfs("PHX");

  return (
    <Fragment>
      <div>
        Hello {props.params.name}
      </div>
    </Fragment>
  );
}
