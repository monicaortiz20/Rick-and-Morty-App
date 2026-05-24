import { ApiResponse, Episode } from "@/src/types/episode";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type PagParams = {
  page?: number;
};

export async function getEpisodes({ page = 1 }: PagParams) {
  const resp = await fetch(`${API_URL}/episode?page=${page}`);

  if (!resp.ok) throw new Error("Error fetching data.");

  const data: ApiResponse = await resp.json();
  return data;
}

//Get All Episodes
export async function getAllEpisodes() {
  let allEpisodes: Episode[] = [];
  let nextUrl: string | null = `${API_URL}/episode`;

  while (nextUrl) {
    const resp = await fetch(nextUrl);
    if (!resp.ok) throw new Error("Error fetching data.");
    const data: ApiResponse = await resp.json();

    allEpisodes = [...allEpisodes, ...data.results];
    nextUrl = data.info.next;
  }
  return allEpisodes;
}

//Get Episode by ID
export async function getEpisodeById(id: string) {
  const resp = await fetch(`${API_URL}/episode/${id}`);
  if (!resp.ok) throw new Error("Error fetching episode.");

  return resp.json();
}
