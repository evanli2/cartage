"use client";
import { useQueryState, parseAsString } from "nuqs";
import { Button } from "@/components/ui/button";

export function SongSearchForm() {
  const [term, setTerm] = useQueryState(
    "term",
    parseAsString.withDefault("Taylor Swift").withOptions({ shallow: false })
  );

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        setTerm(term);
      }}
      className="flex items-center gap-2 max-w-md mx-auto mb-8"
    >
      <input
        type="text"
        value={term}
        onChange={e => setTerm(e.target.value)}
        placeholder="Search for songs or artists..."
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Search for songs or artists"
      />
      <Button type="submit" size="sm">
        Search
      </Button>
    </form>
  );
} 