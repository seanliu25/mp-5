import PostPreview from "@/components/post-preview";
import DisplayAllPosts from "@/components/display-all-posts";
import getAllPosts from "@/lib/getAllPosts";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div>
      <DisplayAllPosts inputPosts={posts} />
    </div>
  );
}
