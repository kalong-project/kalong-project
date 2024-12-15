import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Jika scroll > 120px, tambahkan class
      } else {
        setIsScrolled(false); // Jika tidak, hapus class
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener saat komponen tidak digunakan lagi
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled
          ? "bg-gray-800 opacity-90 text-white"
          : "bg-transparent text-black"
      } fixed flex items-center justify-between px-4 py-2 w-full top-0 delay-75 duration-150 transition-all ease-in-out z-[1000]`}
    >
      {/* Brand Logo and Name */}
      <div className="flex items-center space-x-2">
        <Image
          src={`${isScrolled ? "/logo-dark.svg" : "/logo-light.svg"}`}
          alt="Kalong Project Logo"
          width={40}
          height={40}
        />
        <h1 className="text-2xl font-bold caveat">Kalong Project</h1>
      </div>

      {/* Navigation Links */}
      <nav className="space-x-6 dm-mono-light">
        <Link className="hover:underline" href="/courses">
          Courses
        </Link>
        <Link className="hover:underline" href="/services">
          Services
        </Link>
        <Link className="hover:underline" href="/about">
          About Us
        </Link>
        <Link className="hover:underline" href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}
