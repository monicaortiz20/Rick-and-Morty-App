"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Character } from "@/src/types/character";

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
        <h2 className="text-3x1 font-orb font-black text-white md:text-4x1">
          Characters
        </h2>
        <div
          className="hidden items-center
        gap-2 text-sm
        text-zinc-500
        md:flex"
        >
          <span> Drop to explore</span>
          <span className="text-[var(--neon-green)] animate-pulse">
            &#x2194;
          </span>
        </div>
      </div>

      <div className="relative">
        <div
          className="pointer-events-none
      absolute left-0 top-0
      z-10 hidden
      h-full w-24
      bg-gradient-to-r from-[#050816]
      to transparent
      md:block"
        />
        <div
          className="pointer-events-none
        absolute
        right-0 top-0
        z-10 hidden
      h-full w-24
      bg-gradient-to-r from-[#050816]
      to transparent
      md:block"
        />
        <Swiper
          spaceBetween={20}
          grabCursor={true}
          slidesPerView={2.2}
          breakpoints={{
            640: { slidesPerView: 3.2 },
            1024: { slidesPerView: 5.2 },
          }}
        >
          {characters.map((char) => (
            <SwiperSlide key={char.id}>
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
