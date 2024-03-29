import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// sanity client config
export const client = sanityClient({
  projectId: "uxyp1y1j",
  dataset: "production",
  apiVersion: "2022-11-22",
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
