import { useAppContext, TabType } from "@/src/context/AppContext";

export default function Tabs() {
  const { activeTab, setActiveTab, setCurrPage, setSearch } = useAppContext();

  return (
    <div className="flex w-full items-center gap-3 md:w-fit">
      <button
        onClick={() => {
          setActiveTab("episodes");
          setCurrPage(1);
          setSearch("");
        }}
        className={`rounded-full px-6 py-3 text-[20px] font-semibold tracking-wide font-orb transition-all duration-300 md:px-8 md:py-4 cursor-pointer ${activeTab == "episodes" ? `bg-[var(--neon--green-soft)] text-[var(--neon-green)] shadow-[0_0_20px_rgba(163, 255, 18, 0.12)]` : `bg-transparent text-zinc-500 hover:text-white`}`}
      >
        Episodes
      </button>
      <button
        onClick={() => {
          setActiveTab("locations");
          setCurrPage(1);
          setSearch("");
        }}
        className={`rounded-full px-6 py-3 text-[20px] tracking-wide font-semibold font-orb transition-all duration-300 md:px-8 md:py-4 cursor-pointer ${activeTab == "locations" ? `bg-[var(--neon--green-soft)] text-[var(--neon-green)] shadow-[0_0_20px_rgba(163, 255, 18, 0.12)]` : `bg-transparent text-zinc-500 hover:text-white`}`}
      >
        Locations
      </button>
    </div>
  );
}
