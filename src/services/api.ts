import { ApiResponse } from "@/src/types/episode";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Params = {
  page?: number;
  search?: string;
};

// type GetEpisodesParams = {
//   page?: number;
//   name?: string;
//   episode?: string;
// };

export default async function getEpisodes({ page = 1, search = "" }: Params) {
  const queryParams = new URLSearchParams({
    page: page.toString(),
  });

  //Search by name or episode
  if (search) queryParams.append("name", search);

  const resp = await fetch(`${API_URL}/episode?${queryParams}`);

  //handleError - review
  if (!resp.ok) throw new Error("Error fetching data");

  const data: ApiResponse = await resp.json();
  return data;
}
