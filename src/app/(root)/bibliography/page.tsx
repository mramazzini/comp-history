"use client";

import SLink from "@/app/components/SLink";
import SrcTable from "@/app/components/SrcTable";
import data from "@/app/data";
const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gradient-to-b from-indigo-500 via-sky-500 to-emerald-500">
      <h1 className="text-4xl font-bold">Bibliography</h1>
      <p className="text-lg text-center m-2">
        Here are the sources used to compile this information. Click on the row
        to view the source url.
      </p>
      <SLink href="/">Home</SLink>
      <div className="divider divider-accent" />
      <SrcTable />
    </main>
  );
};

export default Page;
