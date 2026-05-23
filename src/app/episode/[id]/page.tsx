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
    <main
      className="page-container relative mx-auto
    flex min-h-screen
    w-full flex-col gap-10"
    >
      <Link
        href="/"
        className="flex h-[56px] w-[56px]
        items-center
        justify-center
        rounded-2x1 border
        border-white/5
        bg-white/[0.03]
        text-2x1
        text-white
        transition-all
        duration-300
        cursor-pointer
        hover:border-[rgba(163, 255, 18, 0.2)] hover:text-[var(--neon-green)]
        hover:shadow-[0_0_20px_rgba(163, 255, 18, 0.08)]"
      >
        &#x2190;
      </Link>
      <EpisodeDetail episode={episode} />
      <CharacterCarousel characters={characters} />
      <Form />
    </main>
  );
}
