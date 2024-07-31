import Image from "next/image";
import Timeline from "../components/Timeline";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-indigo-500 via-sky-500 to-emerald-500">
      <h1 className="text-4xl font-bold">The History of Computers</h1>
      <p className="text-lg text-center m-2">
        Have you ever wondered how computers came to be? Here&apos;s a brief
        history of the evolution of computers.
      </p>
      <Link
        className="btn btn-ghost border border-gray-500 m-2"
        href="/bibliography"
      >
        Bibliography -&gt;
      </Link>
      <div className="divider divider-accent" />
      <Timeline />
    </main>
  );
}
