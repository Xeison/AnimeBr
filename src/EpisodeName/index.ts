import { attackOnTitanEpisodes } from "./attack-on-titan";
import { bleachEpisodes } from "./bleach";
import { jujutsuKaisenEpisodes } from "./jujutsu-kaisen";
import { onePieceEpisodes } from "./one-piece";
import { jojosBizarreAdventureEpisodes } from "./jojos-bizarre-adventure";
import { AnimeEpisodes, EpisodeInfo } from "./types";

export const allEpisodes: AnimeEpisodes[] = [
  attackOnTitanEpisodes,
  bleachEpisodes,
  jujutsuKaisenEpisodes,
  onePieceEpisodes,
  jojosBizarreAdventureEpisodes,
];

export const getEpisodesByAnimeId = (animeId: string): EpisodeInfo[] => {
  return allEpisodes.find((anime) => anime.animeId === animeId)?.episodes || [];
};

export const getEpisodeById = (
  animeId: string,
  episodeId: number,
): EpisodeInfo | undefined => {
  const episodes = getEpisodesByAnimeId(animeId);
  return episodes.find((episode) => episode.id === episodeId);
};

export const addEpisode = (
  animeId: string,
  title: string,
): EpisodeInfo | undefined => {
  const animeEpisodes = allEpisodes.find((anime) => anime.animeId === animeId);
  if (!animeEpisodes) return undefined;

  const newId = Math.max(...animeEpisodes.episodes.map((ep) => ep.id), 0) + 1;
  const newEpisode: EpisodeInfo = { id: newId, title };
  animeEpisodes.episodes.push(newEpisode);
  return newEpisode;
};
