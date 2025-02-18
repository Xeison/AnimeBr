export interface Episode {
  id: number;
  videoUrl: string;
  thumbnail: string;
  duration: string;
  progress?: number;
}

export interface AnimeData {
  id: string;
  title: string;
  image: string;
  description: string;
  totalEpisodes: number;
  episodes: Episode[];
  trailerUrl: string;
}
