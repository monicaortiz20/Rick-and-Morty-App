import EpisodeDetail from "@/src/components/EpisodeDetail";
import CharacterCarousel from "@/src/components/CharacterCarousel";
import Form from "@/src/components/Form";
import { getEpisodeById } from "@/src/services/episode";
import { getCharactersById } from "@/src/services/characters";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EpisodePage({ params }: Props) {
  const { id } = await params;
  const episode = await getEpisodeById(id);

  //get Ids from urls
  const characterIds = episode.characters.map((url: string) => {
    const pieces = url.split("/");
    return Number(pieces[pieces.length - 1]);
  });

  const characters = await getCharactersById(characterIds);

  return (
    <div className="flex flex-col md:p-4">
      <Link href="/" className="text-2x1">
        &#x2190;
      </Link>
      <EpisodeDetail episode={episode} />
      <CharacterCarousel characters={characters} />
      <Form />
    </div>
  );
}
