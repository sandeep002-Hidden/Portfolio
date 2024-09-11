"use client";
import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "/", current: true },
  { name: "About-Me", href: "/aboutme", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Contact-Me", href: "/connectwme", current: false },
];
export default function Header() {
  return (
    <>
      <div className="w-full flex items-center py-4 justify-evenly animate-slidein">
        {navigation.map((item) => (
          <Link
            key={item.href} // or use item.id or another unique property if available
            href={item.href}
            className="text-center text-base text-wrap lg:text-xl text-black hover:scale-125 hover:text-highlight font-black"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
}
