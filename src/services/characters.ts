import { Character } from "@/src/types/character";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getCharactersById(ids: number[]): Promise<Character[]> {
  const resp = await fetch(`${API_URL}/character/${ids.join(",")}`);

  if (!resp.ok) throw new Error("Error fetching characters.");
  const data = await resp.json();

  //If there is 1 character, the API take back an obj not an array
  return Array.isArray(data) ? data : [data];
}
