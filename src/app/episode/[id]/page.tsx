import EpisodeDetail from "@/src/components/EpisodeDetail";
import { getEpisodeById } from "@/src/services/episode";
import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EpisodePage({ params }: Props) {
  const { id } = await params;
  const episode = await getEpisodeById(id);

  return (
    <div className="flex flex-col md:p-4">
      <Link href="/" className="text-2x1">
        &#x2190;
      </Link>
      <EpisodeDetail episode={episode} />
    </div>
  );
}
