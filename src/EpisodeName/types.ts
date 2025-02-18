export interface EpisodeInfo {
  id: number;
  title: string;
}

export interface AnimeEpisodes {
  animeId: string;
  episodes: EpisodeInfo[];
}
