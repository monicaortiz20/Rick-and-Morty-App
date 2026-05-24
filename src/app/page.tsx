"use client";
import { useState, useEffect, useMemo } from "react";
import { useAppContext } from "@/src/context/AppContext";
import Header from "@/src/components/Header";
import EpisodeList from "@/src/components/EpisodeList";
import LocationList from "@/src/components/LocationList";
import Pagination from "@/src/components/Pagination";
import { getAllEpisodes, getEpisodes } from "@/src/services/episode";
import { getAllLocations, getLocations } from "@/src/services/locations";
import { Episode } from "@/src/types/episode";
import { Location } from "@/src/types/locations";

import { toast } from "sonner";

export default function Home() {
  const { search, setSearch, activeTab, setActiveTab, currPage, setCurrPage } =
    useAppContext();
  const [totalPages, setTotalPages] = useState(1);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [allEpisodes, setAllEpisodes] = useState<Episode[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [allLocations, setAllLocations] = useState<Location[]>([]);

  //Fetch data
  useEffect(() => {
    async function fetchData() {
      try {
        //Episodes:
        if (activeTab === "episodes") {
          //search mode
          if (search.trim()) {
            const data = await getAllEpisodes();
            setAllEpisodes(data);
            return;
          }
          //normal mode
          const data = await getEpisodes({
            page: currPage,
          });
          setEpisodes(data.results);
          setTotalPages(data.info.pages);
        }

        //Locations:
        if (activeTab === "locations") {
          //search mode
          if (search.trim()) {
            const data = await getAllLocations();
            setAllLocations(data);
            return;
          }
          //normal mode
          const data = await getLocations({
            page: currPage,
          });
          setLocations(data.results);
          setTotalPages(data.info.pages);
        }
      } catch (error) {
        toast.error("An error has happend.Please, try again.");
      }
    }
    fetchData();
  }, [activeTab, currPage, search]);

  //Search filter EPISODES
  const filteredEpisodes = useMemo(() => {
    if (!search.trim()) {
      return episodes;
    }

    return allEpisodes.filter((epi) => {
      const value = search.toLocaleLowerCase();
      return (
        epi.name.toLocaleLowerCase().includes(value) ||
        epi.episode.toLocaleLowerCase().includes(value)
      );
    });
  }, [search, episodes, allEpisodes]);

  //Search filter LOCATIONS
  const filteredLocations = useMemo(() => {
    if (!search.trim()) {
      return locations;
    }

    return allLocations.filter((loc) => {
      const value = search.toLocaleLowerCase();
      return (
        loc.name.toLocaleLowerCase().includes(value) ||
        loc.type.toLocaleLowerCase().includes(value) ||
        loc.dimension.toLocaleLowerCase().includes(value)
      );
    });
  }, [search, locations, allLocations]);

  return (
    <main
      className="
    page-container relative mx-auto flex 
    min-h-screen w-full flex-col gap-6 
    px-4 py-4
    md:gap-8 md:px-6
     lg:gap-10 lg:px-8"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--neon-green-soft)] blur-[140px]" />
      <section className="relative z-10 flex flex-col gap-6 md:gap-8">
        <Header />

        {activeTab === "episodes" && (
          <EpisodeList episodes={filteredEpisodes} />
        )}
        {activeTab === "locations" && (
          <LocationList locations={filteredLocations} />
        )}

        {!search && <Pagination totalPages={totalPages} />}
      </section>
    </main>
  );
}
