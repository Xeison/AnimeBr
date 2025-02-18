import { attackOnTitan } from "./attack-on-titan";
import { bleach } from "./bleach";
import { jujutsuKaisen } from "./jujutsu-kaisen";
import { onePiece } from "./one-piece";
import { jojosBizarreAdventure } from "./jojos-bizarre-adventure";
import { AnimeData } from "./types";

export const animeList: AnimeData[] = [
  attackOnTitan,
  bleach,
  jujutsuKaisen,
  onePiece,
  jojosBizarreAdventure,
];

export const trailers = animeList.map((anime) => ({
  id: parseInt(anime.id),
  videoUrl: anime.trailerUrl,
  title: anime.title,
  description: anime.description,
}));

export const getAnimeById = (id: string): AnimeData | undefined => {
  return animeList.find((anime) => anime.id === id);
};

export const getEpisodeById = (animeId: string, episodeId: number) => {
  const anime = getAnimeById(animeId);
  return anime?.episodes.find((episode) => episode.id === episodeId);
};
