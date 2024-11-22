"use client";
import { PostProps } from "@/types";
import { useState } from "react";
import PostPreview from "./post-preview";
import NewPost from "../new-post";
import createNewPost from "@/lib/createNewPost";

export default function DisplayAllPosts({
  inputPosts,
}: {
  inputPosts: PostProps[];
}) {
  const [posts, setPosts] = useState<PostProps[]>(inputPosts);
  const [message, setMessage] = useState<string | null>(null);

  async function addNewPost(title: string, url: string) {
    setMessage(null);

    const result = await createNewPost(title, url);

    if (!result.success) {
      setMessage(result.message || "Failed to create post.");
      return false;
    }

    if (result.post) {
      setPosts([result.post, ...posts]);
    }

    setMessage(result.message || "Post created successfully.");
    return true;
  }

  return (
    <div className="flex flex-col items-center">
      {message && <p className={`text-${message.includes("success") ? "green" : "red"}`}>{message}</p>}
      <NewPost createFunc={addNewPost} />
      {posts.map((p, i) => (
        <PostPreview key={`${i}-${p.title}`} post={p} />
      ))}
    </div>
  );
}
