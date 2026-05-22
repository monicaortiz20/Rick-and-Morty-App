import { Search } from "@/src/types/episode";

export default function Searchbar({ search, setSearch }: Search) {
  return (
    <input
      type="text"
      placeholder="Search episode..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-2 rounded"
    />
  );
}
