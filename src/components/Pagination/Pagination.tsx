import { PaginationProps } from "@/src/types/episode";

export default function Pagination({
  currPage,
  totalPages,
  onPrev,
  onNext,
}: PaginationProps) {
  return (
    <div className="flex items-center gap-4 mt-8">
      <button
        onClick={onPrev}
        disabled={currPage === 1}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        &#x2190;
      </button>
      <span>
        {" "}
        Page {currPage} of {totalPages}
      </span>
      <button
        onClick={onNext}
        disabled={currPage === totalPages}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        &#x2192;
      </button>
    </div>
  );
}
