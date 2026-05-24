import { Props } from "@/src/types/episode";
import { useAppContext } from "@/src/context/AppContext";

export default function Pagination({ totalPages }: Props) {
  const { currPage, setCurrPage } = useAppContext();
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
        onClick={() => setCurrPage((pag) => pag - 1)}
        disabled={currPage === 1}
        className="flex h-[56px] w-[56px]
        items-center
        justify-center
        rounded-2xl border
        border-white/5
        bg-white/[0.03]
        text-2xl
        text-white
        transition-all
        duration-300
        cursor-pointer
        hover:border-[rgba(163, 255, 18, 0.2)] hover:text-[var(--neon-green)]
        hover:shadow-[0_0_20px_rgba(163, 255, 18, 0.08)]
        disabled:cursor-not-allowed
        disabled:opacity-30
        disabled:hover:border-white/5
        disabled:hover:text-white
        disabled:hover:shadow-none"
      >
        &#x2190;
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
        onClick={() => setCurrPage((pag) => pag + 1)}
        disabled={currPage === totalPages}
        className="flex h-[56px] w-[56px]
        items-center
        justify-center
        rounded-2xl border
        border-white/5
        bg-white/[0.03]
        text-2xl
        text-white
        transition-all
        duration-300
        cursor-pointer
        hover:border-[rgba(163, 255, 18, 0.2)] hover:text-[var(--neon-green)]
        hover:shadow-[0_0_20px_rgba(163, 255, 18, 0.08)]
        disabled:cursor-not-allowed
        disabled:opacity-30
        disabled:hover:border-white/5
        disabled:hover:text-white
        disabled:hover:shadow-none"
      >
        &#x2192;
      </button>
    </div>
  );
}
