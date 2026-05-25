"use client";
import { Character } from "@/src/types/character";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type Props = {
  characters: Character[];
};

export default function CharacterCarousel({ characters }: Props) {
  return (
    <section
      className="relative mt-10
    flex flex-col
    gap-8"
    >
      <div
        className="flex items-center
      justify-between"
      >
        <h2 className="text-3xl font-orb font-black text-white md:text-4xl">
          Characters
        </h2>
      </div>

      <div className="relative px-2 md:px-8">
        <div
          className="pointer-events-none
          absolute left-0 top-1/2
          z-10 
          -translate-y-1/2
          md:block"
        >
          <ChevronLeftIcon
            className="h-5 w-5
            text-[var(--neon-green)]
            lg:h-12 lg:w-12"
          />
        </div>
        <div
          className="pointer-events-none
          absolute right-0 top-1/2
          z-10
          -translate-y-1/2
          md:block"
        >
          <ChevronRightIcon
            className="h-5 w-5
            text-[var(--neon-green)]
            lg:h-12 lg:w-12"
          />
        </div>
        <Swiper
          spaceBetween={12}
          grabCursor={true}
          slidesPerView={"auto"}
          breakpoints={{
            640: { spaceBetween: 14 },
            1024: { spaceBetween: 16 },
          }}
        >
          {characters.map((char) => (
            <SwiperSlide key={char.id} className="!w-[160px]">
              <div
                className="flex flex-col
                !justify-center items-center
                cursor-grab
                gap-4
                active:cursor-grabbing"
              >
                <div
                  className="relative overflow-hidden
                  rounded-full"
                >
                  <Image
                    src={char.image}
                    alt={char.name}
                    width={140}
                    height={140}
                    className="h-[140px] w-[140px] rounded-full object-cover transition-transform
                    duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                </div>

                <span
                  className="text-center text-sm
                  font-medium leading-relaxed
                  text-zinc-300"
                >
                  {char.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
