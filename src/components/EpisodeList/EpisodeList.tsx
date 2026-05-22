import { Episode } from "@/src/types/episode";
import Image from "next/image";

import { episodeImages } from "@/src/utils/episodeImages";
type Props = {
  episodes: Episode[];
};
export default function EpisodeList({ episodes }: Props) {
  return (
    <div className="flex flex-col items-center gap-6 p-10">
      <div className="flex flex-col gap-2">
        {episodes.length === 0 ? (
          <span className="text-gray-700 dark:text-gray-400">
            No episodes found
          </span>
        ) : (
          episodes.map((episode) => {
            const imgIndex = episode.id % episodeImages.length;

            const img = episodeImages[imgIndex];
            return (
              <div
                key={episode.id}
                className="flex flex-col items-center bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs md:flex-row md:max-w-xl md:flex-row md:max-w-xl"
              >
                <Image
                  className="object-cover w-full rounded-base h-64 md:h-auto md:w-48 mb-4 md:mb-0"
                  src={img}
                  alt={episode.name}
                  width={300}
                  height={300}
                  loading="eager"
                />
                <div className="flex flex-col justify-between md:p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading">
                    {episode.episode}
                  </h5>
                  <p className="mb-6 text-body">{episode.name}</p>
                  <p className="mb-6 text-body">{episode.air_date}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
