"use client";
import Image from "next/image";
import Form from "next/form";

import searchIcon from "@/public/icon-search.svg";

export const Search = () => {
  return (
    <Form
      action="/"
      className="bg-lightMode-white dark:bg-darkMode-dark-blue p-2 rounded-xl flex items-center gap-2 pl-4"
    >
      <Image src={searchIcon} alt="" />
      <input
        placeholder="Search GitHub username.."
        className="font-spaceMono text-xs dark:bg-darkMode-dark-blue dark:text-darkMode-white bg-lightMode-white text-lightMode-dark-blue w-full focus:border-none focus:outline-none focus:ring-0"
        name="query"
      />
      <button className="font-spaceMono bg-lightMode-blue text-sm p-3 rounded-lg font-bold text-white">
        Search
      </button>
    </Form>
  );
};
