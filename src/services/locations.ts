import { Location, LocationApiResponse } from "@/src/types/locations";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

type LocPagesParams = {
  page?: number;
};

export async function getLocations({ page = 1 }: LocPagesParams) {
  const resp = await fetch(`${API_URL}/location?page=${page}`);

  if (!resp.ok) throw new Error("Error fetching data.");

  const data: LocationApiResponse = await resp.json();
  return data;
}

//Get All Locations
export async function getAllLocations() {
  let allLocations: Location[] = [];
  let nextUrl: string | null = `${API_URL}/location`;

  while (nextUrl) {
    const resp = await fetch(nextUrl);
    if (!resp.ok) throw new Error("Error fetching locations.");
    const data: LocationApiResponse = await resp.json();

    allLocations = [...allLocations, ...data.results];
    nextUrl = data.info.next;
  }
  return allLocations;
}
