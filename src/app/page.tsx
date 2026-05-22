"use client";
import { useState, useEffect } from "react";
import Header from "@/src/components/Header";
import EpisodeList from "@/src/components/EpisodeList";
//import Pagination from "@/src/components/Pagination";
import { Episode } from "@/src/types/episode";
import getEpisodes from "@/src/services/api";

export default function Home() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [search, setSearch] = useState("");
  //const [currPage, setCurrPage] = useState(1);
  //const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchEpisodes() {
      //const resp = await fetch(endpoints.episodes);
      //ejemplo: const resp = await fetch(`${process.env.REACT_APP_API_BASE_URL}/characters)
      const data = await getEpisodes({
        //page: currentPage,
        search,
        //episode: search;
      });
      setEpisodes(data.results);
      //setTotalPages(data.info.pages)
    }
    fetchEpisodes();
  }, [search]); //TODO

  return (
    <main>
      <Header search={search} setSearch={setSearch} />
      <EpisodeList episodes={episodes} />

      {/* <Pagination /> */}
    </main>
  );
}
