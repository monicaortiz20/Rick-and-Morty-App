import { Episode } from "@/src/types/episode";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

type Props = {
  episode: Episode;
};

export default function EpisodeDetail({ episode }: Props) {
  return (
    <section
      className="relative rounded-[32px]
    border border-white/5
    bg-white/[0.03]
    p-8 md:p-12"
    >
      <div>
        <span
          className="inline-flex items-center rounded-lg
          bg-black/60
          px-6 py-4
          text-base 
          font-semibold
          text-[var(--neon-green)]
          backdrop-blur-md"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          {episode.episode}
        </span>
      </div>
      <h1
        className="text-4x1 font-black
      leading-tight
      text-white
      md:text-6x1"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        {episode.name}
      </h1>
      <div
        className="flex gap-3 items-center
      text-zinc-400"
      >
        <CalendarDaysIcon className="h-6 w-6 text-[var(--neon-green)]" />
        <p className="text-base font-medium md:text-lg">{episode.air_date}</p>
      </div>
    </section>
  );
}
