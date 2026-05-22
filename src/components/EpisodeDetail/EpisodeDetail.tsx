import { Episode } from "@/src/types/episode";

type Props = {
  episode: Episode;
};

export default function EpisodeDetail({ episode }: Props) {
  return (
    <div className="flex flex-col gap-6 p-10">
      <p className="font-bold">{episode.episode}</p>
      <h1 className="text-4x1 font-bold">{episode.name}</h1>
      <div className="flex flex-col gap-2">
        <p className="font-bold">Episode: {episode.air_date}</p>
      </div>
    </div>
  );
}
