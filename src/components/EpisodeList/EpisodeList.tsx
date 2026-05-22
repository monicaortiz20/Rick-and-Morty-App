import { Episode } from "@/src/types/episode";
type Props = {
  episodes: Episode[];
};
export default function EpisodeList({ episodes }: Props) {
  return (
    <div className="flex flex-col items-center gap-6 p-10">
      <div className="flex flex-col gap-2">
        {episodes.map((episode) => (
          <p className="text-gray-700 dark:text-gray-400" key={episode.id}>
            {episode.name} & {episode.episode}
          </p>
        ))}
      </div>
    </div>
  );
}
