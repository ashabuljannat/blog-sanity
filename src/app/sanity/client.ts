import { SanityClient, createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const client: SanityClient = createClient({
  projectId: "skg34hk8",
  apiVersion: "2021-10-21",
  useCdn: false,
  dataset: 'production',
});
const builder: ImageUrlBuilder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource): ImageUrlBuilder {
  return builder.image(source);
}
export default client;
