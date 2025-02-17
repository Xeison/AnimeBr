import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import EpisodeList from "./EpisodeList/EpisodeList";
import Layout from "./layout/Layout";

const Home = () => {
  const [currentEpisodeId, setCurrentEpisodeId] = useState(1);

  const episodes = [
    {
      id: 1,
      title: "Episode 1: The Beginning",
      duration: "24:00",
      progress: 100,
      thumbnail:
        "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=120&h=68&fit=crop",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      savedProgress: 0,
    },
    {
      id: 2,
      title: "Episode 2: The Journey Continues",
      duration: "24:00",
      progress: 45,
      thumbnail:
        "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=120&h=68&fit=crop",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      savedProgress: 180,
    },
    {
      id: 3,
      title: "Episode 3: New Challenges",
      duration: "24:00",
      progress: 0,
      thumbnail:
        "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=120&h=68&fit=crop",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      savedProgress: 0,
    },
  ];

  const currentEpisode =
    episodes.find((ep) => ep.id === currentEpisodeId) || episodes[0];

  const handleEpisodeSelect = (episodeId: number) => {
    setCurrentEpisodeId(episodeId);
  };

  return (
    <Layout>
      <div className="flex min-h-[calc(100vh-4rem)] bg-zinc-950">
        <div className="flex-1 flex items-center justify-center">
          <VideoPlayer
            src={currentEpisode.videoUrl}
            title={currentEpisode.title}
            savedProgress={currentEpisode.savedProgress}
          />
        </div>
        <EpisodeList
          episodes={episodes}
          currentEpisodeId={currentEpisodeId}
          onEpisodeSelect={handleEpisodeSelect}
        />
      </div>
    </Layout>
  );
};

export default Home;
