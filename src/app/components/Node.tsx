//Timeline Node

import Link from "next/link";
import { Props } from "../types";
import SLink from "./SLink";

const Node = ({
  year,
  title,
  children,
  sources,

  flip = false,
  final = false,
}: Props) => {
  return (
    <li>
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={`timeline-${flip ? "start" : "end"} mb-10 md:text-${
          flip ? "end" : "start"
        }`}
      >
        <time className="font-mono italic">
          {typeof year === "string" ? year : `${year.start} - ${year.end}`}
        </time>
        <div className="text-lg font-black">{title}</div>
        {children}
        <br />
        {sources.map((source, index) => (
          <SLink href={source.url} key={index}>
            {source.title} - {source.author}
          </SLink>
        ))}
      </div>
      {!final && <hr />}
    </li>
  );
};

export default Node;
