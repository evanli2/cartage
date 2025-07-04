import { SongList, Song } from "@/components/songs/song-list";
import { SongSearchForm } from "@/components/songs/song-search-form";

async function fetchSongs(term: string): Promise<Song[]> {
  const params = new URLSearchParams({
    term,
    entity: "song",
    limit: "16",
  });
  const res = await fetch(`https://itunes.apple.com/search?${params.toString()}`);
  if (!res.ok) return [];
  const data = await res.json();
  return (data.results || []).map((item: any) => ({
    trackId: item.trackId,
    trackName: item.trackName,
    artistName: item.artistName,
    collectionName: item.collectionName,
    artworkUrl100: item.artworkUrl100,
    previewUrl: item.previewUrl,
  }));
}

interface SongsPageProps {
  searchParams: { term?: string };
}

export default async function SongsPage({ searchParams }: SongsPageProps) {
  const term = searchParams.term || "Taylor Swift";
  const songs = await fetchSongs(term);
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">iTunes Songs</h1>
      <SongSearchForm />
      <SongList songs={songs} />
    </div>
  );
} 