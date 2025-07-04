import { Navbar } from "@/components/layout/navbar";
import { SongSearchAndList } from "@/components/songs/song-search-and-list";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">iTunes Songs</h1>
        <SongSearchAndList />
      </div>
    </main>
  );
}
