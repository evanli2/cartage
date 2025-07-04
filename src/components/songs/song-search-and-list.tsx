"use client";
import { useState, useEffect } from "react";
import { SongList, Song } from "@/components/songs/song-list";
import { Button } from "@/components/ui/button";
import React from "react";

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

function Spinner() {
  return (
    <span className="ml-2 w-5 h-5 inline-block animate-spin rounded-full border-2 border-gray-300 border-t-blue-500" />
  );
}

export function SongSearchAndList() {
  const [input, setInput] = useState("");
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const trimmed = input.trim();
    if (!trimmed) {
      setSongs([]);
      setError(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    const handler = setTimeout(async () => {
      try {
        const results = await fetchSongs(trimmed);
        setSongs(results);
      } catch (err) {
        setError("Failed to fetch songs.");
      } finally {
        setLoading(false);
      }
    }, 400);
    return () => clearTimeout(handler);
  }, [input]);

  return (
    <div>
      <div className="flex items-center gap-2 max-w-md mx-auto mb-8">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Search for songs or artists..."
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-80"
          aria-label="Search for songs or artists"
        />
        {loading && <Spinner />}
      </div>
      {error && <div className="text-center text-red-500 mb-4">{error}</div>}
      {input.trim() && loading && (
        <div className="text-center text-gray-500 mb-4">Searching for songs...</div>
      )}
      {input.trim() && !loading && songs.length === 0 && (
        <div className="text-center text-gray-500 mb-4">No songs found.</div>
      )}
      {input.trim() && !loading && songs.length > 0 && <SongList songs={songs} />}
    </div>
  );
} 