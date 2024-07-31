import Link from "next/link";

const SLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className="btn btn-ghost border border-white m-2">
      {children} -&gt;
    </Link>
  );
};

export default SLink;
