"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// type
interface LinkType {
  name: string;
  href: string;
}

// Define the navigation items
const navItems: LinkType[] = [
  { name: "সর্বশেষ", href: "/" },
  { name: "জাতীয়", href: "/national" },
  { name: "রাজনীতি", href: "/political" },
  { name: "অর্থনীতি", href: "/contact" },
  { name: "সারা দেশ", href: "/bangladesh" },
  { name: "বিশ্ব", href: "/world" },
  { name: "খেলা", href: "/game" },
  { name: "জুলাই বিপ্লব", href: "/biplob" },
  { name: "ধর্ম ও ইসলাম", href: "/religion" },
  { name: "বিনোদন", href: "/entertainemnt" },
];

const Navbar = () => {
  const pathname = usePathname();
  const session = useSession();
  return (
    <nav className="py-5 border-b flex justify-between items-center overflow-auto w-full ">
      <ul className="flex  gap-6 items-center font-semibold text-lg">
        {navItems.map((item: LinkType, id: number) => (
          <Link
            className={`${pathname == item.href ? "text-[#EE1B24]" : ""}`}
            href={item.href}
            key={id}
          >
            <li key={item.name}>
              <a href={item.href}>{item.name}</a>
            </li>
          </Link>
        ))}
      </ul>
      {session.status === "authenticated" ? (
        <Link href="/login">
          <button className="px-7">Logout</button>
        </Link>
      ) : (
        <Link href="/login">
          <button className="px-7">Login</button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
