import getCollection, { POSTS_COLLECTION } from "@/db";
import { PostProps } from "@/types";

export default async function getAllPosts(): Promise<PostProps[]> {
  const postsCollection = await getCollection(POSTS_COLLECTION);
  const data = await postsCollection.find().toArray();

  return data.map((post) => ({
    url: post.url,
    title: post.title,
  }));
}
