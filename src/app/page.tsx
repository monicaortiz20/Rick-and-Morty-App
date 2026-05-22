"use client";
import { useState, useEffect, useMemo } from "react";
import Header from "@/src/components/Header";
import EpisodeList from "@/src/components/EpisodeList";
import Pagination from "@/src/components/Pagination";
import { Episode } from "@/src/types/episode";
import { getAllEpisodes, getEpisodes } from "@/src/services/api";

export default function Home() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [allEpisodes, setAllEpisodes] = useState<Episode[]>([]);
  const [search, setSearch] = useState("");
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchEpisodes() {
      //search mode
      if (search.trim()) {
        const allData = await getAllEpisodes();
        setAllEpisodes(allData);
        return;
      }

      //normal mode
      const data = await getEpisodes({
        page: currPage,
      });
      setEpisodes(data.results);
      setTotalPages(data.info.pages);
    }
    fetchEpisodes();
  }, [currPage, search]);

  //Search filter
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

  return (
    <main className="flex flex-col gap-8 p-10">
      <Header search={search} setSearch={setSearch} />
      <EpisodeList episodes={filteredEpisodes} />

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
