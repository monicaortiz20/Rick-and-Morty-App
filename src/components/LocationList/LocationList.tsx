import { Location } from "@/src/types/locations";

import Image from "next/image";

import { locationImages } from "@/src/utils/locationImages";
type Props = {
  locations: Location[];
};
export default function LocationList({ locations }: Props) {
  return (
    <div
      className="
      fade-in
      flex
      flex-col
      gap-8
    "
    >
      {locations.length === 0 ? (
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
            No locations found
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
          {locations.map((loc) => {
            const imgIndex = loc.id % locationImages.length;

            const img = locationImages[imgIndex];

            return (
              <div
                key={loc.id}
                className="
                relative
                flex
                flex-col
                overflow-hidden
                rounded-[28px]
                border
                border-white/5
                bg-white/[0.03]
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
                  "
                    src={img}
                    alt={loc.name}
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
                </div>
                <div
                  className="
                  flex
                  flex-1
                  flex-col
                  justify-between
                  gap-6
                "
                  style={{
                    padding: "15px 20px",
                  }}
                >
                  <div className="flex flex-col gap-4">
                    <h2
                      className="
                      text-2xl
                      font-bold
                      leading-tight
                      text-white
                    "
                    >
                      {loc.name}
                    </h2>

                    <p
                      className="
                      text-sm
                      text-zinc-400
                      md:text-base
                    "
                    >
                      Dimension: {loc.dimension}
                    </p>
                  </div>

                  <div
                    className="
                    flex
                    items-center
                    pt-2
                  "
                  >
                    <span
                      className="
                      text-sm
                      uppercase
                      tracking-[0.2em]
                      text-zinc-500
                    "
                      style={{
                        fontFamily: "Orbitron, sans-serif",
                      }}
                    >
                      {loc.type}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
