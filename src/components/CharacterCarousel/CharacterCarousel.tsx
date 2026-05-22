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
    <div className="w-full max-w-6x1 mt-10">
      <h2 className="text-2x1 font-bold mb-6">Characters: </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }}
      >
        {characters.map((char) => (
          <SwiperSlide key={char.id}>
            <div className="flex flex-col items-center gap-3">
              <Image
                src={char.image}
                alt={char.name}
                width={200}
                height={200}
                className="rounded-full"
                loading="eager"
              />
              <span className="font-semibold text-center">{char.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
