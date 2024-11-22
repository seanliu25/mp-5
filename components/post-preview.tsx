import { PostProps } from "@/types";

export default function PostPreview({ post }: { post: PostProps }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener"
    >
      <div className="bg-sky-400 rounded-xl p-4 m-2 w-96">
        <h4 className="font-bold text-3xl">{post.title}</h4>
        <p className="text-sm text-gray-700 mt-2">{post.url}</p> 
      </div>
    </a>
  );
}
