import Searchbar from "@/src/components/Searchbar";
import { Props } from "@/src/types/episode";

export default function Header({ search, setSearch }: Props) {
  return (
    <header className="w-full p-4 border-b">
      <h1 className="text-2x1 font-bold">Rick & Morty</h1>
      <Searchbar search={search} setSearch={setSearch} />
    </header>
  );
}
