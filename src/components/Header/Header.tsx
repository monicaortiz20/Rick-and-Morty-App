import Searchbar from "@/src/components/Searchbar";
import Tabs from "@/src/components/Tabs";

type Props = {
  search: string;
  setSearch: (value: string) => void;
  activeTab: "episodes" | "locations";
  setActiveTab: (value: "episodes" | "locations") => void;
};

export default function Header({
  search,
  setSearch,
  activeTab,
  setActiveTab,
}: Props) {
  return (
    <header className="relative z-10 flex flex-col gap-8 py-2">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[var(--neon-green-soft)] opacity-40 blur-[120px]" />
      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3">
          <h1
            className="text-4x1 font-black uppercase tracking-[0.15em] text-white md:text-5x1 lg:text-6x1"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            <span className="neon-text">Rick</span> & Morty
          </h1>
          <p className="max-w-[650px] text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
            Explore episodes, dimensions and characters from the multiverse
          </p>
        </div>
        <div className="w-full lg:w-[380px]">
          <Searchbar search={search} setSearch={setSearch} />
        </div>
      </div>
      <div className="relative z-10">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </header>
  );
}
