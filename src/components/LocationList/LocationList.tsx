import { Location } from "@/src/types/locations";

import Image from "next/image";

import { locationImages } from "@/src/utils/locationImages";
type Props = {
  locations: Location[];
};
export default function LocationList({ locations }: Props) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-col gap-2">
        {locations.length === 0 ? (
          <span className="text-gray-700 dark:text-gray-400">
            No locations found
          </span>
        ) : (
          locations.map((loc) => {
            const imgIndex = loc.id % locationImages.length;
            const img = locationImages[imgIndex];
            return (
              <div
                key={loc.id}
                className="flex flex-col items-center bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs md:flex-row md:max-w-xl md:flex-row md:max-w-xl"
              >
                <Image
                  className="object-cover w-full rounded-base h-64 md:h-auto md:w-48 mb-4 md:mb-0"
                  src={img}
                  alt={loc.name}
                  width={300}
                  height={300}
                  loading="eager"
                />
                <div className="flex flex-col justify-between md:p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading">
                    {loc.name}
                  </h5>
                  <p className="mb-6 text-body">{loc.type}</p>
                  <p className="mb-6 text-body">{loc.dimension}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
