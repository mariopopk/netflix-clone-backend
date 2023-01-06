const item = {
  id: "81231974",
  name: "Wednesday",
  description:
    "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
  releaseYear: "2022",
  maturityLevel: "TV-14",
  keywords: "Deadpan",
  genres: [
    "TV Mysteries",
    "Crime TV Shows",
    "Fantasy TV Shows",
    "Teen TV Shows",
    "TV Comedies",
  ],
  starring: ["Jenna Ortega", "Gwendoline Christie", "Riki Lindhome"],
  cast: [
    "Jenna Ortega",
    "Gwendoline Christie",
    "Riki Lindhome",
    "Christina Ricci",
    "Jamie McShane",
    "Hunter Doohan",
    "Percy Hynes White",
    "Emma Myers",
    "Joy Sunday",
    "Moosa Mostafa",
    "Georgie Farmer",
    "Naomi J. Ogawa",
    "Catherine Zeta-Jones",
    "Luis Guzmán",
  ],
  audio: [],
  subtitles: [],
  images: {
    tallBanner:
      "https://occ-0-2794-2218.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABeMZkNnHuV8Y6pFrWEjxEZG8xvjo-JqEJzrBVbBo76pxXC9QOCBcJZZU0KjD8hONdRR6x9QAGgpUZCLr0ljFcZlBS1gjBo-Y5D6-.jpg?r=570",
    wideBanner:
      "https://occ-0-2794-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYZ_9Wml838MQOf9pWOOVLn5TMejp-qMZ6eYoPf-co0gIJzlio8SGd6rgcPrFJPMGMutYsWMoXPm30p-DCNSLc2Ug_I5TDscFq2E.jpg?r=615",
    logo: "https://occ-0-2794-2218.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABdxlUl_M2h5ERjFfyvuhRn2v-Az7Pwe_KxG_M9HSWbURJYrAs9pvqDPa3B3UPTCn3K_xS17OhTYmOca-lM4XAN7y5RogX7xYSfhIkk21Sgt9wNuZlqUFsCVdSD-tT7udzadO5zDd2hkAMGYPQJV9kbYoTY6n6u5X4YgGHG6AStY-EUePkvpO6A.png?r=50a",
    wideThumbnail:
      "https://occ-0-2794-2218.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWAJSAFzlJdOuv3_snQnw4OH_1vJtwRT1OMdvTMm5gnR56Ng0Gxo6MUtSL6zq4zr32yxCfaDT2oDhwrnYhv6aUXXiyJ1189gchRTk677wNHIi1Nf2gYqVkcCqbENJPTbIewEBA.jpg?r=082",
    tallThumbnail:
      "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABXTNCsvo5SYK4LYgl8RMMkz934xpNNvc4wowAtm7bANynUzcbgwaYnjLXH8bzSvEc2uJlA4vW36EHMun2KZT7fVk1CFQI7F7sLo98mJYMsjwYlI_Xa5ZlaJbGh_boUQ_uDABaXlEdNoGcwVFczo3VLHsvc77RRJMR_Eq4wMRqRtWzFby0VLecOJfmmrntqzA.jpg?r=a24",
  },
};

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
    (async () => {
      try {
        await strapi.entityService.delete("api::show.show", item.id);

        const exists = await strapi.entityService.findOne(
          "api::show.show",
          item.id
        );
        if (!exists) {
          const entry = await strapi.entityService.create("api::show.show", {
            data: {
              id: item.id,
              name: item?.name,
              description: item?.description,
            },
          });
          console.log(entry);
        }
      } catch {
        console.log("There was an attempt");
      }
    })();
  },
};
