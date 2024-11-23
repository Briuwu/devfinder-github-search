import Link from "next/link";
import { Toggle } from "./toggle";

export const Nav = () => {
  return (
    <header className="container mx-auto px-6 py-8 flex items-center justify-between">
      <Link href="/">
        <h1 className="font-spaceMono font-bold text-2xl text-lightMode-dark-blue  dark:text-darkMode-white">
          devfinder
        </h1>
      </Link>
      <Toggle />
    </header>
  );
};
