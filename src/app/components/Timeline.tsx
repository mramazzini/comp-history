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
          children={props.children}
          flip={index % 2 === 0}
          final={index === data.length - 1}
        />
      ))}
    </ul>
  );
};

export default Timeline;
