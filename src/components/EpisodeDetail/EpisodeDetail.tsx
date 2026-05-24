import { Episode } from "@/src/types/episode";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

type Props = {
  episode: Episode;
};

export default function EpisodeDetail({ episode }: Props) {
  return (
    <section
      className="relative overflow-hidden rounded-[24px]
    border border-white/5
    bg-white/[0.03]
    p-8 md:p-12"
    >
      <div
        className="pointer-events-none
      absolute right-[-120px] top-[-120px] h-[260px] w-[260px] 
      rounded-full 
      bg-[var(--neon-green-soft)]
      blur-[120px]
      "
      />
      <div
        className="relative z-10
      flex flex-col gap-8"
        style={{ padding: "12px 18px;" }}
      >
        <div>
          <span
            className="inline-flex items-center rounded-lg
          bg-black/60
          px-6 py-4
          text-sm
          font-semibold
          tracking-[0.18em]
          text-[var(--neon-green)]
          backdrop-blur-md
          font-orb
          uppercase
          md:text-base"
            style={{ padding: "0px 6px" }}
          >
            {episode.episode}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="max-w-4xl">
            <h1
              className="text-4xl font-black
          leading-[1.05]
          text-white
          md:text-6xl
          font-orb"
            >
              {episode.name}
            </h1>
          </div>
          <div
            className="flex gap-4 items-center
        px-5 py-4 w-fit
        backdrop-blur-sm"
          >
            <CalendarDaysIcon className="h-6 w-6 text-[var(--neon-green)]" />
            <div className="flex flex-col">
              <span
                className="text-xs uppercase 
    tracking-[0.18em]
    text-zinc-500"
              >
                Air Date
              </span>
              <p className="text-base font-medium text-zinc-200 md:text-lg">
                {episode.air_date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
