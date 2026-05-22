"use client";
import { useState, useEffect, useMemo, act } from "react";
import Header from "@/src/components/Header";
import EpisodeList from "@/src/components/EpisodeList";
import LocationList from "@/src/components/LocationList";
import Pagination from "@/src/components/Pagination";
import { getAllEpisodes, getEpisodes } from "@/src/services/episode";
import { getAllLocations, getLocations } from "@/src/services/locations";
import { Episode } from "@/src/types/episode";
import { Location } from "@/src/types/locations";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"episodes" | "locations">(
    "episodes",
  );
  const [search, setSearch] = useState("");
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [allEpisodes, setAllEpisodes] = useState<Episode[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [allLocations, setAllLocations] = useState<Location[]>([]);

  //To reset page on tab change
  useEffect(() => {
    setCurrPage(1);
    setSearch("");
  }, [activeTab]);

  //Fetch data
  useEffect(() => {
    async function fetchData() {
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
    <main className="flex flex-col gap-8 p-10">
      <Header
        search={search}
        setSearch={setSearch}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "episodes" && <EpisodeList episodes={filteredEpisodes} />}
      {activeTab === "locations" && (
        <LocationList locations={filteredLocations} />
      )}

      {!search && (
        <Pagination
          currPage={currPage}
          totalPages={totalPages}
          onPrev={() => setCurrPage((prev) => prev - 1)}
          onNext={() => setCurrPage((prev) => prev + 1)}
        />
      )}
    </main>
  );
}
