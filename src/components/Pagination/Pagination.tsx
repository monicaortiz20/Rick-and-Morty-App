import { useAppContext } from "@/src/context/AppContext";
import { useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type Props = {
  totalPages: number;
};

export default function Pagination({ totalPages }: Props) {
  const { currPage, setCurrPage } = useAppContext();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currPage]);
  return (
    <div
      className="padding-mainBotton  
      flex flex-row
    items-center
    justify-center
    gap-5
    py-6
    "
    >
      <button
        onClick={() => currPage > 1 && setCurrPage((pag) => pag - 1)}
        disabled={currPage === 1}
        className="h-14 w-14 
        flex items-center justify-center
        rounded-2xl border
        border-white/5 bg-white/[0.03]
        transition-all duration-300 cursor-pointer
        hover:border-[rgba(163, 255, 18, 0.2)] hover:text-[var(--neon-green)]
        hover:shadow-[0_0_20px_rgba(163, 255, 18, 0.08)]
        disabled:cursor-not-allowed
        disabled:opacity-30
        disabled:hover:border-white/5
        disabled:hover:text-white
        disabled:hover:shadow-none"
      >
        <ChevronLeftIcon
          className="h-5 w-5
            text-[var(--neon-green)]
            lg:h-10 lg:w-10"
        />
      </button>

      <span
        className="text-sm uppercase tracking-[0.18em]
        text-zinc-400
        md:text-base
        font-orb"
      >
        Page <span className="text-[vaar(--neon-green)]">{currPage}</span> of{" "}
        {totalPages}
      </span>
      <button
        onClick={() => currPage < totalPages && setCurrPage((pag) => pag + 1)}
        disabled={currPage === totalPages}
        className="h-14 w-14 
        flex items-center justify-center
        rounded-2xl border
        border-white/5 bg-white/[0.03]
        transition-all duration-300 cursor-pointer
        hover:border-[rgba(163, 255, 18, 0.2)] hover:text-[var(--neon-green)]
        hover:shadow-[0_0_20px_rgba(163, 255, 18, 0.08)]
        disabled:cursor-not-allowed
        disabled:opacity-30
        disabled:hover:border-white/5
        disabled:hover:text-white
        disabled:hover:shadow-none"
      >
        <ChevronRightIcon
          className="h-5 w-5
            text-[var(--neon-green)]
            lg:h-12 lg:w-12"
        />
      </button>
    </div>
  );
}
