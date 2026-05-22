import { Episode } from "@/src/types/episode";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

type Props = {
  episode: Episode;
};

export default function EpisodeDetail({ episode }: Props) {
  return (
    <div className="flex flex-col gap-6 p-10">
      <p className="font-bold">{episode.episode}</p>
      <h1 className="text-4x1 font-bold">{episode.name}</h1>
      <div className="flex gap-2">
        <CalendarDaysIcon className="w-5 h-5" />
        <p className="font-bold">{episode.air_date}</p>
      </div>
    </div>
  );
}
