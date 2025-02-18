import { AnimeData } from "./types";

export const onePiece: AnimeData = {
  id: "4",
  title: "One Piece",
  image: "/images/onePiece.jpg",
  description:
    "Follow Monkey D. Luffy and his pirate crew in their epic quest to find the legendary One Piece treasure.",
  totalEpisodes: 1122,
  trailerUrl: "/Traillers/803343252.mp4",
  episodes: [
    {
      id: 1,
      title:
        "Episode 1: I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "/images/onePiece.jpg",
      duration: "24:00",
      progress: 0,
    },
    {
      id: 2,
      title:
        "Episode 2: Enter the Great Swordsman! Pirate Hunter Roronoa Zoro!",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "/images/onePiece.jpg",
      duration: "24:00",
      progress: 0,
    },
  ],
};
