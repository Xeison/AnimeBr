import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Play, CheckCircle2 } from "lucide-react";

interface Episode {
  id: number;
  title: string;
  duration: string;
  progress: number;
  thumbnail: string;
}

interface EpisodeListProps {
  episodes?: Episode[];
  currentEpisodeId?: number;
  onEpisodeSelect?: (episodeId: number) => void;
}

const EpisodeList = ({
  episodes = [
    {
      id: 1,
      title: "Episode 1: The Beginning",
      duration: "24:00",
      progress: 100,
      thumbnail:
        "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=120&h=68&fit=crop",
    },
    {
      id: 2,
      title: "Episode 2: The Journey Continues",
      duration: "24:00",
      progress: 45,
      thumbnail:
        "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=120&h=68&fit=crop",
    },
    {
      id: 3,
      title: "Episode 3: New Challenges",
      duration: "24:00",
      progress: 0,
      thumbnail:
        "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=120&h=68&fit=crop",
    },
  ],
  currentEpisodeId = 2,
  onEpisodeSelect = () => {},
}: EpisodeListProps) => {
  return (
    <div className="w-80 h-full bg-zinc-900 border-l border-zinc-800">
      <div className="p-4 border-b border-zinc-800">
        <h2 className="text-xl font-semibold text-white">Episodes</h2>
      </div>
      <ScrollArea className="h-[calc(100%-4rem)]">
        <div className="p-4 space-y-4">
          {episodes.map((episode) => (
            <div
              key={episode.id}
              className={`rounded-lg overflow-hidden ${episode.id === currentEpisodeId ? "ring-2 ring-blue-500" : ""}`}
            >
              <Button
                variant="ghost"
                className="w-full p-0 h-auto hover:bg-zinc-800"
                onClick={() => onEpisodeSelect(episode.id)}
              >
                <div className="w-full space-y-2">
                  <div className="relative aspect-video w-full">
                    <img
                      src={episode.thumbnail}
                      alt={`Episode ${episode.id} thumbnail`}
                      className="w-full h-full object-cover"
                    />
                    {episode.id === currentEpisodeId && (
                      <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="p-2 text-left space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white">
                        {episode.title}
                      </span>
                      {episode.progress === 100 && (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      )}
                    </div>
                    <div className="flex items-center justify-between text-xs text-zinc-400">
                      <span>{episode.duration}</span>
                      {episode.progress > 0 && episode.progress < 100 && (
                        <span>{episode.progress}% watched</span>
                      )}
                    </div>
                    {episode.progress > 0 && episode.progress < 100 && (
                      <Progress value={episode.progress} className="h-1" />
                    )}
                  </div>
                </div>
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default EpisodeList;
