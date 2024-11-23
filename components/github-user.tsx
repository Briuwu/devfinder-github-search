import { getUserByUsername } from "@/actions/username";
import Image from "next/image";

import locationIcon from "@/public/icon-location.svg";
import websiteIcon from "@/public/icon-website.svg";
import companyIcon from "@/public/icon-company.svg";
import twtIcon from "@/public/icon-twitter.svg";
import Link from "next/link";

type Props = {
  query: string;
};

export const GithubUser = async ({ query }: Props) => {
  const user = await getUserByUsername(query);

  if (!user) {
    return (
      <div className="bg-lightMode-white dark:bg-darkMode-dark-blue py-8 px-6 rounded-xl flex items-center gap-2 justify-center font-spaceMono">
        <p className="uppercase">No User Found</p>
      </div>
    );
  }
  return (
    <div className="bg-lightMode-white dark:bg-darkMode-dark-blue py-8 px-6 rounded-xl items-center font-spaceMono flex gap-9">
      <Image
        src={user.avatar_url}
        alt=""
        width={460}
        height={460}
        className="object-cover w-[117px] h-[117px] rounded-full self-start hidden md:block"
      />
      <div className="w-full">
        <div className="mb-8 w-full flex gap-5">
          <Image
            src={user.avatar_url}
            alt=""
            width={460}
            height={460}
            className="object-cover w-[70px] h-[70px] rounded-full block md:hidden"
          />
          <div className="h-full flex flex-col md:flex-row md:justify-between items-start w-full">
            <div>
              <p className="font-bold textbase text-lightMode-dark-grey dark:text-white">
                {user.name}
              </p>
              <Link
                href={user.html_url}
                target="_blank"
                className="text-lightMode-blue dark:text-darkMode-blue text-sm"
              >
                @{user.login}
              </Link>
            </div>
            <p className="text-sm text-lightMode-grey dark:text-white">
              {new Date(user.created_at).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        <p className="text-lightMode-dark-blue dark:text-darkMode-white text-sm">
          {user.bio}
        </p>
        <div className="p-5 rounded-xl bg-lightMode-light-grey dark:bg-darkMode-black mt-6 grid grid-cols-3 gap-1">
          <p className="flex items-center flex-col gap-2 text-xs">
            Repos{" "}
            <span className="text-base font-bold">{user.public_repos}</span>
          </p>
          <p className="flex items-center flex-col gap-2 text-xs">
            Followers{" "}
            <span className="text-base font-bold">{user.followers}</span>
          </p>
          <p className="flex items-center flex-col gap-2 text-xs">
            Following{" "}
            <span className="text-base font-bold">{user.following}</span>
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-5">
            <Image src={locationIcon} alt="" />
            <p className="text-lightMode-dark-blue dark:text-darkMode-white text-sm">
              {user.location}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Image src={websiteIcon} alt="" />
            <Link
              href={user.blog}
              target="_blank"
              className="text-lightMode-dark-blue dark:text-darkMode-white text-sm"
            >
              {user.blog ? user.blog : "Not Available"}
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Image src={twtIcon} alt="" />
            <Link
              href={`https://x.com/${user.twitter_username}`}
              target="_blank"
              className="text-lightMode-dark-blue dark:text-darkMode-white text-sm"
            >
              {user.twitter_username ? user.twitter_username : "Not Available"}
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Image src={companyIcon} alt="" />
            <p className="text-lightMode-dark-blue dark:text-darkMode-white text-sm">
              {user.company ? user.company : "Not Available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
