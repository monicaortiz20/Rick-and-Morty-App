type TabsProps = {
  activeTab: "episodes" | "locations";
  setActiveTab: (value: "episodes" | "locations") => void;
};

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="flex w-full items-center gap-3 md:w-fit">
      <button
        onClick={() => setActiveTab("episodes")}
        className={`rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-300 md:px-8 ${activeTab == "episodes" ? `bg-[var(--neon--green-soft)] text-[var(--neon-green)] shadow-[0_0_20px_rgba(163, 255, 18, 0.12)]` : `bg-transparent text-zinc-500 hover:text-white`}`}
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        Episodes
      </button>
      <button
        onClick={() => setActiveTab("locations")}
        className={`rounded-full px-5 py-3 text-sm tracking-wide font-semibold transition-all duration-300 md:px-8 ${activeTab == "locations" ? `bg-[var(--neon--green-soft)] text-[var(--neon-green)] shadow-[0_0_20px_rgba(163, 255, 18, 0.12)]` : `bg-transparent text-zinc-500 hover:text-white`}`}
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        Locations
      </button>
    </div>
  );
}
