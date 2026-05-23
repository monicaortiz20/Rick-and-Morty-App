import { Search } from "@/src/types/episode";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
export default function Searchbar({ search, setSearch }: Search) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search episode..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input-ui glass w-full rounded-2x1 border border-white/5 bg-white/[0.03] px-5 py-3 pr-12 text-sm text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-[var(--neon-green)] focus:shadow-[0_0_20px_rgba(163, 255, 18, 0.15)] md:text-base"
      />
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500">
        <MagnifyingGlassIcon className="w-5 h-5" />
      </div>
    </div>
  );
}
