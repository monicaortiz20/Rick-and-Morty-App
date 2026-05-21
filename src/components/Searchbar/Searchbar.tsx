import styles from "./Searchbar.module.css";

export default function Searchbar() {
  return (
    <div className="flex align lg:ml-6">
      <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
        <span className="sr-only">Search</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          data-slot="icon"
          aria-hidden="true"
          className="size-6"
        >
          <path
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
