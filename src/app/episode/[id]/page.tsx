import EpisodeDetail from "@/src/components/EpisodeDetail";
import CharacterCarousel from "@/src/components/CharacterCarousel";
import Form from "@/src/components/Form";
import { getEpisodeById } from "@/src/services/episode";
import { getCharactersById } from "@/src/services/characters";
import Link from "next/link";
import Image from "next/image";

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
    w-full flex-col gap-10
    overflow-hidden"
    >
      <div
        className="pointer-events-none
        fixed
        right-0
        top-0
        z-0"
      >
        <Image
          src="/assets/interdimensional-bg.jpeg"
          alt="background-img"
          width={720}
          height={720}
          priority
          className="object-contain
           opacity-90
           w-auto
           "
        />

        <div
          className="absolute inset-0
        bg-gradient-to-l from-transparent
        via-transparent to-[#050816]"
        />

        <div
          className="absolute bottom-0 left-0
      h-[220px] w-full bg-gradient-to-t
      from-[#050816] to-transparent"
        />
      </div>

      <Link
        href="/"
        className=" relative z-50
        flex h-[56px] w-[56px]
        items-center
        justify-center
        rounded-2xl border
        border-white/5
        bg-white/[0.03]
        text-2xl
        text-white
        transition-all
        duration-300
        cursor-pointer
        hover:border-[rgba(163, 255, 18, 0.2)] hover:text-[var(--neon-green)]
        hover:shadow-[0_0_20px_rgba(163, 255, 18, 0.08)]"
      >
        &#x2190;
      </Link>
      <div
        className="relative z-10
      flex flex-col
      gap-10"
      >
        <EpisodeDetail episode={episode} />
        <CharacterCarousel characters={characters} />
        <Form />
      </div>
    </main>
  );
}
