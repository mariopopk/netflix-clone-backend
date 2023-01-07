import shows from "./doNotKeepData";

export interface Show {
  id: string;
  name: string;
  description: string;
  releaseYear: string;
  maturityLevel: MaturityLevel;
  keywords: string;
  genres: string[];
  starring: string[];
  cast: string[];
  audio: string[];
  subtitles: string[];
  images: ShowImages;
}

export interface ShowImages {
  tallBanner: string;
  wideBanner: string;
  tallThumbnail: string;
  wideThumbnail: string;
  logo: string;
}

export type MaturityLevel =
  | "TV-Y"
  | "TV-Y7"
  | "G"
  | "TV-G"
  | "PG"
  | "TV-PG"
  | "PG-13"
  | "TV-14"
  | "R"
  | "TV-MA"
  | "NC-17";

const actors = new Set<string>();
shows.forEach((show) => {
  // Cast
  show.cast.forEach((cast) => {
    if (cast) actors.add(cast);
  });

  // Starring
  show.starring.forEach((starring) => {
    if (starring) actors.add(starring);
  });
});

const keywords = new Set<string>();
shows.forEach((show) => {
  show.keywords.split(",").forEach((word) => {
    if (word) keywords.add(word.trim());
  });
});

const genres = new Set<string>();
shows.forEach((show) => {
  show.genres.forEach((item) => {
    if (item) genres.add(item.trim());
  });
});

const languages = new Set<string>();
shows.forEach((show) => {
  show.audio.forEach((item) => {
    if (item) languages.add(item.trim());
  });

  show.subtitles.forEach((item) => {
    if (item) languages.add(item.trim());
  });
});

shows.forEach((item) => {
  if (!item.images.wideThumbnail) console.log(item.name);
});

export default { keywords, languages, genres, actors };
