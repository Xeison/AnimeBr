import { AnimeData } from "./types";

export const attackOnTitan: AnimeData = {
  id: "1",
  title: "Attack on Titan",
  image: "/images/atacatitanov.webp",
  description:
    "The war for Paradis zeroes in on Shiganshina just as Jaegerists have seized control. After taking a huge blow from a surprise attack led by Eren, Marley swiftly acts to return the favor.",
  totalEpisodes: 76,
  trailerUrl: "/Traillers/684545901.mp4",
  episodes: [
    {
      id: 1,
      title: "Episode 1: To You, 2,000 Years From Now",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "/images/atacatitanov.webp",
      duration: "24:00",
      progress: 100,
    },
    {
      id: 2,
      title: "Episode 2: That Day",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "/images/atacatitanov.webp",
      duration: "24:00",
      progress: 45,
    },
    {
      id: 3,
      title: "Episode 3: A Dim Light Amid Despair",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnail: "/images/atacatitanov.webp",
      duration: "24:00",
      progress: 0,
    },
  ],
};
