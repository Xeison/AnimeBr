import { AnimeData } from "./types";

export const jojosBizarreAdventure: AnimeData = {
  id: "5",
  title: "JoJo's Bizarre Adventure",
  image: "/images/JoJos_Bizarre_Adventure.jpg",
  description:
    "Follow the Joestar family across generations as they face supernatural forces using their unique abilities.",
  totalEpisodes: 190,
  trailerUrl: "/Traillers/803343252.mp4",
  episodes: [
    {
      id: 1,
      title: "Episode 1: Dio the Invader",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "/images/JoJos_Bizarre_Adventure.jpg",
      duration: "24:00",
      progress: 0,
    },
    {
      id: 2,
      title: "Episode 2: A Letter from the Past",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "/images/JoJos_Bizarre_Adventure.jpg",
      duration: "24:00",
      progress: 0,
    },
  ],
};
