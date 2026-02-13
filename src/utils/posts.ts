import { getCollection } from "astro:content";

export async function getSortedPosts() {
  return (await getCollection("blog")).sort(
    (a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0)
  );
}
