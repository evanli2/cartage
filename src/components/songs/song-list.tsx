"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef, useState } from "react";

export interface Song {
  trackId: number;
  trackName: string;
  artistName: string;
  collectionName: string;
  artworkUrl100: string;
  previewUrl?: string;
}

interface SongListProps {
  songs: Song[];
}

export function SongList({ songs }: SongListProps) {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const audioRefs = useRef<Record<number, HTMLAudioElement | null>>({});

  function handlePlayPause(song: Song) {
    const currentAudio = audioRefs.current[song.trackId];
    if (!currentAudio) return;
    if (playingId === song.trackId) {
      currentAudio.pause();
      setPlayingId(null);
    } else {
      // Pause any other audio
      Object.entries(audioRefs.current).forEach(([id, audio]) => {
        if (Number(id) !== song.trackId && audio) audio.pause();
      });
      currentAudio.currentTime = 0;
      currentAudio.play();
      setPlayingId(song.trackId);
    }
  }

  function handleAudioEnded(song: Song) {
    setPlayingId((id) => (id === song.trackId ? null : id));
  }

  if (!songs.length)
    return <div className="text-center text-gray-500 py-12">No songs found.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {songs.map((song) => (
        <Card key={song.trackId} className="flex flex-col items-center p-4">
          <Image
            src={song.artworkUrl100}
            alt={song.trackName}
            width={100}
            height={100}
            className="rounded shadow mb-3"
          />
          <CardContent className="flex flex-col items-center text-center p-0">
            <div className="font-semibold text-base mb-1">{song.trackName}</div>
            <div className="text-sm text-gray-600 mb-1">{song.artistName}</div>
            <div className="text-xs text-gray-400 mb-2">{song.collectionName}</div>
            {song.previewUrl && (
              <>
                <audio
                  ref={el => { audioRefs.current[song.trackId] = el; }}
                  src={song.previewUrl}
                  onEnded={() => handleAudioEnded(song)}
                  onPause={() => handleAudioEnded(song)}
                />
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handlePlayPause(song)}
                  className="mt-2"
                >
                  {playingId === song.trackId ? "Pause" : "Play"}
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 