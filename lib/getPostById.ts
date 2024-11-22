import getCollection, { POSTS_COLLECTION } from "@/db";
import { PostProps } from "@/types";

export default async function getPostById(url: string): Promise<PostProps | null> {
  if (!url) {
    console.error(`Invalid URL1: ${url}`);
    return null;
  }

  const postsCollection = await getCollection(POSTS_COLLECTION);

  // Query the database for a post with the matching URL
  const data = await postsCollection.findOne({ url });

  if (!data) {
    console.error(`Post not found for URL: ${url}`);
    return null;
  }

  const post: PostProps = {
    url: data.url,
    title: data.title,
  };

  return post;
}
