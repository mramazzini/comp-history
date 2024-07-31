import Node from "./Node";
import data from "../data";
const Timeline = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {data.map((props, index) => (
        <Node
          key={index}
          year={props.year}
          title={props.title}
          sources={props.sources}
          flip={index % 2 === 0}
          final={index === data.length - 1}
        >
          {props.children}
        </Node>
      ))}
    </ul>
  );
};

export default Timeline;
