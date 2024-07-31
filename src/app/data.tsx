import { Props } from "./types";
import SLink from "./components/SLink";

const data: Props[] = [
  {
    year: { start: "1837", end: "1843" },
    title: "Herman Hollerith's Punch Card System",
    sources: [
      {
        url: "https://americanhistory.si.edu/collections/nmah_694417",
        title: "National Museum of American History",
        author: "Herman Hollerith",
        year: "1890",
        publisher: "Smithsonian Institution",
        location: "Washington, D.C.",
      },
    ],
    children:
      "Herman Hollerith developed a punch card system to help process data for the 1890 U.S. Census, which significantly sped up the tabulation process.",
  },
  {
    year: "1936",
    title: "Alan Turing's Universal Machine",
    sources: [
      {
        url: "https://www.turing.org.uk/scrapbook/machine.html",
        title:
          "On Computable Numbers, with an Application to the Entscheidungsproblem",
        author: "Alan Turing",
        year: "1936",
        publisher: "London Mathematical Society",
        location: "London, England",
      },
    ],
  },
];

export default data;
