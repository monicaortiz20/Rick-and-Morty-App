import Searchbar from "@/src/components/Searchbar";
import Tabs from "@/src/components/Tabs";
import Image from "next/image";

import { useAppContext } from "@/src/context/AppContext";

export default function Header() {
  const { search, setSearch, activeTab, setActiveTab } = useAppContext();
  return (
    <header className="relative z-10 -mx-6 flex flex-col gap-8 py-2 md:-mx-10">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[var(--neon-green-soft)] opacity-40 blur-[120px]" />
      <div
        className="relative z-10 flex flex-col 
      gap-6 px-6 
      md:px-10
      lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="flex flex-col gap-3">
          <Image
            src="/assets/header.png"
            alt="Rick & Morty logo"
            width={600}
            height={200}
            className="h-auto w-[350px]
          object-contain
          md:w-[500px]
          lg:w-[650px]"
            loading="eager"
          />
          <p className=" padding-main max-w-[650px] text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
            Explore episodes, dimensions and characters from the multiverse
          </p>
        </div>
        <div className="padding-main w-full lg:w-[380px]">
          <Searchbar search={search} setSearch={setSearch} />
        </div>
      </div>
      <div className="padding-main relative z-10">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </header>
  );
}
