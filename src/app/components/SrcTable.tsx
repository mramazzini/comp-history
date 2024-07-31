import data from "../data";
const SrcTable = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table bg-black/20">
        <thead>
          <tr>
            <th className="text-white">Author</th>
            <th className="text-white">Title</th>
            <th className="text-white">Year</th>
            <th className="text-white">URL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((props, index) => (
            <>
              {props.sources.map((source, index) => (
                <tr
                  key={index}
                  className="hover:bg-black/40 cursor-pointer"
                  onClick={() => {
                    window.open(source.url, "_blank");
                  }}
                >
                  <td key={index}>
                    {source.author ? source.author : "Unknown"}
                  </td>
                  <td key={index}>{source.title}</td>
                  <td key={index}>{source.year}</td>
                  <td className="text-ellipsis overflow-hidden " key={index}>
                    {source.url}
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SrcTable;
