import { GithubUser } from "@/components/github-user";
import { Search } from "@/components/search";

export default async function Home({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const { query } = await searchParams;
  return (
    <div className="space-y-4">
      <Search />
      <GithubUser query={query || "Briuwu"} />
    </div>
  );
}
