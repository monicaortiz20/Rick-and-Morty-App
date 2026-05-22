import { Location } from "@/src/types/locations";
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
          locations.map((loc) => (
            <p className="text-gray-700 dark:text-gray-400" key={loc.id}>
              {loc.name} - {loc.dimension} - {loc.type}
            </p>
          ))
        )}
      </div>
    </div>
  );
}
