import { Episode } from "@/src/types/episode";
import { episodeImages } from "@/src/utils/episodeImages";
import Image from "next/image";
import Link from "next/link";

type Props = {
  episodes: Episode[];
};
export default function EpisodeList({ episodes }: Props) {
  return (
    <div
      className="
      fade-in
      flex
      flex-col
      gap-8
    "
    >
      {episodes.length === 0 ? (
        <div
          className="
          flex
          min-h-[300px]
          items-center
          justify-center
          rounded-[24px]
          border
          border-white/5
          bg-white/[0.02]
          text-center
        "
        >
          <span
            className="
            text-lg
            text-zinc-500
          "
          >
            No episodes found
          </span>
        </div>
      ) : (
        <div
          className="
          grid
          grid-cols-1
          gap-6
          xl:grid-cols-2
        "
        >
          {episodes.map((episode) => {
            const imgIndex = episode.id % episodeImages.length;
            const img = episodeImages[imgIndex];
            return (
              <Link
                href={`/episode/${episode.id}`}
                key={episode.id}
                className="
                group
                relative
                flex
                cursor-pointer
                flex-col
                overflow-hidden
                rounded-[28px]
                border
                border-white/5
                bg-white/[0.03]
                transition-all
                duration-300
                hover:scale-[1.01]
                hover:border-[rgba(163,255,18,0.15)]
                hover:shadow-[0_0_30px_rgba(163,255,18,0.08)]
                md:flex-row
              "
              >
                <div
                  className="
                  relative
                  h-[260px]
                  w-full
                  overflow-hidden
                  md:h-auto
                  md:w-[260px]
                  md:min-w-[260px]
                "
                >
                  <Image
                    className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                    src={img}
                    alt={episode.name}
                    width={500}
                    height={500}
                    loading="eager"
                  />
                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#050816]
                    via-[#050816]/20
                    to-transparent
                  "
                  />
                  <div
                    className="
                    absolute
                    left-4
                    top-4
                    z-10
                  "
                  >
                    <span
                      className="inline-flex items-center rounded-lg
                    bg-black/65
                    text-base
                    font-semibold
                    text-[var(--neon-green)]
                    backdrop-blur-md"
                      style={{
                        fontFamily: "Orbitron, sans-serif",
                        padding: "0px 5px",
                      }}
                    >
                      {episode.episode}
                    </span>
                  </div>
                </div>
                <div
                  className="
                  flex
                  flex-1
                  flex-col
                  justify-between
                  gap-6
                "
                  style={{ padding: "15px 20px" }}
                >
                  <div className="flex flex-col gap-4">
                    <h2
                      className="
                      text-2xl
                      font-bold
                      leading-tight
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-[var(--neon-green)]
                    "
                    >
                      {episode.name}
                    </h2>
                    <p
                      className="
                      text-sm
                      text-zinc-400
                      md:text-base
                    "
                    >
                      {episode.air_date}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
