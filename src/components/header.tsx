"use client";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  Search,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-5 border-b">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-3xl">
            VO<span className="text-green-500">B</span>
            <span className="text-[#f31d1d]">D</span>
          </h1>
        </div>
        <div>
          <div className="flex items-center space-x-4">
            <nav className="flex items-center space-x-3">
              <Link
                href="https://facebook.com"
                className="text-primary hover:text-primary/80"
              >
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com"
                className="text-primary hover:text-primary/80"
              >
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://youtube.com"
                className="text-primary hover:text-primary/80"
              >
                <YoutubeIcon className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-primary hover:text-primary/80"
              >
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://instagram.com"
                className="text-primary hover:text-primary/80"
              >
                <InstagramIcon className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <button className="text-primary hover:text-primary/80">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </button>
            </nav>
          </div>
          <div className="mt-2 text-right text-sm text-muted-foreground">
            সোমবার, ২১ জানুয়ারি ২০২৪
          </div>
        </div>
      </div>
    </header>
  );
}
