"use client";
import { Home, LogOut, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

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
  console.log(session);
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
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 p-2 text-sm font-medium">
                <span>{session.data.user?.name}</span>
                <Avatar className="h-8 w-8">
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 mt-1 space-y-1">
              <DropdownMenuItem>
                <Home className="mr-2 h-4 w-4" />
                <span>Home</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
                className="text-red-600"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <Link href="/api/auth/signin">
          <button className="px-7">Login</button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
