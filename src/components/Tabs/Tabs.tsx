type TabsProps = {
  activeTab: "episodes" | "locations";
  setActiveTab: (value: "episodes" | "locations") => void;
};

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={() => setActiveTab("episodes")}
        className={activeTab == "episodes" ? "font-bold" : ""}
      >
        Episodes
      </button>
      <button
        onClick={() => setActiveTab("locations")}
        className={activeTab == "locations" ? "font-bold" : ""}
      >
        Locations
      </button>
    </div>
  );
}
