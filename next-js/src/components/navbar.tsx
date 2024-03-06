"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="h-14">
      <div className="flex w-full h-14 pt-4 justify-between  border-b  border-b-slate-300 fixed p-5 bg-white">
      <h1 className="text-xl font-bold text-black">FoodPie</h1>
      <div className="flex gap-5">
        <Link href={"/"}>
          <span
            className={
              pathname === "/" ? "underline underline-offset-4" : "no-underline"
            }
          >
            Home
          </span>
        </Link>
        <Link href={"/food"}>
          <span
            className={
              pathname === "/food"
                ? "underline underline-offset-4"
                : "no-underline"
            }
          >
            Food
          </span>
        </Link>
        <Link href={"/about"}>
          <span
            className={
              pathname === "/about"
                ? "underline underline-offset-4"
                : "no-underline"
            }
          >
            About
          </span>
        </Link>
        <Link href={"/dashboard"}>
          <span
            className={
              pathname === "/dashboard"
                ? "underline underline-offset-4"
                : "no-underline"
            }
          >
            Dashboard
          </span>
        </Link>
        <Link href={"/todo"}>
          <span
            className={
              pathname === "/todo"
                ? "underline underline-offset-4"
                : "no-underline"
            }
          >
            Todo
          </span>
        </Link>
        <div><ModeToggle /></div>
      </div>
      </div>
    </nav>
  );
}