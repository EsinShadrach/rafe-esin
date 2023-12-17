import Link from "next/link";

export function ConnectIcon({
  href,
  children,
  title,
}: {
  href: string;
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div
      className="p-2 rounded-md hover:bg-orange-300 w-fit transition-all duration-300 group"
      title={title}
    >
      <Link
        href={href}
        target="_blank"
        referrerPolicy="no-referrer"
        className="w-fit"
      >
        {children}
      </Link>
    </div>
  );
}
