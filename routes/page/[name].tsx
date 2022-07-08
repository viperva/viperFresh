/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query: string;
  width: number;
}

export const handler: Handlers<Data | null> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const width = window.innerWidth;
    const results = NAMES.filter((name) => name.includes(query));
    return ctx.render({ results, query, width });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query, width } = data;
  return (
    <div>
      <form>
        <input type="text" name="q" value={query} />
        <button type="submit">{width}</button>
      </form>
      <ul>
        {results.map((name) => <li key={name}>{name}</li>)}
      </ul>
    </div>
  );
}
