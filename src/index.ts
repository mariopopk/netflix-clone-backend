import data, { Show } from "./doNotKeep";
import shows from "./doNotKeepData";

async function seed(data: Set<string>, entity: string) {
  const list = [...data];

  const map = new Map<string, string>();

  for (const item of list) {
    const added = await strapi.entityService.create(entity, {
      data: { name: item },
    });

    map.set(item, added.id);
  }

  return map;

  // return new Promise((resolve, reject) => {

  //   // data.forEach()
  // });
}

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    // (async () => {
    //   try {
    //     // Empty DB
    //     await strapi.db.query("api::actor.actor").deleteMany();
    //     await strapi.db.query("api::genre.genre").deleteMany();
    //     await strapi.db.query("api::keyword.keyword").deleteMany();
    //     await strapi.db.query("api::language.language").deleteMany();
    //     await strapi.db.query("api::show.show").deleteMany();
    //     //
    //     const dbActorIds = await seed(data.actors, "api::actor.actor");
    //     const dbGenreIds = await seed(data.genres, "api::genre.genre");
    //     const dbKeywordIds = await seed(data.keywords, "api::keyword.keyword");
    //     const dbLanguageIds = await seed(
    //       data.languages,
    //       "api::language.language"
    //     );
    //     shows.forEach(async (item) => {
    //       // return;
    //       const entry = await strapi.entityService.create("api::show.show", {
    //         data: {
    //           id: item.id,
    //           name: item?.name,
    //           description: item?.description,
    //           releaseYear: parseInt(item?.releaseYear),
    //           maturityLevel: item?.maturityLevel?.trim(),
    //           images: {
    //             wideBanner: item?.images?.wideBanner,
    //             tallThumbnail: item?.images?.tallThumbnail,
    //             logo: item?.images?.logo,
    //             wideThumbnail: item?.images?.wideThumbnail,
    //             tallBanner: item?.images?.tallBanner,
    //           },
    //           cast: item.cast
    //             .map((key) => {
    //               const id = dbActorIds.get(key);
    //               if (id) return { id };
    //             })
    //             .filter((i) => i),
    //           starring: item.starring
    //             .map((key) => {
    //               const id = dbActorIds.get(key);
    //               if (id) return { id };
    //             })
    //             .filter((i) => i),
    //           audio: item.audio
    //             .map((key) => {
    //               const id = dbLanguageIds.get(key);
    //               if (id) return { id };
    //             })
    //             .filter((i) => i),
    //           subtitles: item.subtitles
    //             .map((key) => {
    //               const id = dbLanguageIds.get(key);
    //               if (id) return { id };
    //             })
    //             .filter((i) => i),
    //           genres: item.genres
    //             .map((key) => {
    //               const id = dbGenreIds.get(key);
    //               if (id) return { id };
    //             })
    //             .filter((i) => i),
    //           keywords: item.keywords
    //             .split(",")
    //             .map((key) => {
    //               const id = dbKeywordIds.get(key.trim());
    //               if (id) return { id };
    //             })
    //             .filter((i) => i),
    //         },
    //       });
    //       // console.log(entry);
    //     });
    //   } catch {
    //     console.log("There was an attempt");
    //   }
    // })();
  },
};
