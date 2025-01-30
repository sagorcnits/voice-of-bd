"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// type
interface LinkType {
  name: string;
  href: string;
}

// Define the navigation items
const navItems: LinkType[] = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "New", href: "/" },
  { name: "Play", href: "/blog" },
  { name: "History", href: "/about" },
  { name: "Islam", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="py-5 border-b flex justify-between items-center overflow-auto w-full">
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

      <button className="px-7">Login</button>
    </nav>
  );
};

export default Navbar;
