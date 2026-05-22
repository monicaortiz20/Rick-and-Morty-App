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
    <header className="w-full p-4 border-b p-4">
      <div className="flex item-center justify-between">
        <h1 className="text-2x1 font-bold">Rick & Morty</h1>
        <Searchbar search={search} setSearch={setSearch} />
      </div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </header>
  );
}
