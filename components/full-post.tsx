import { PostProps } from "@/types";
import { ThumbDown, ThumbUp } from "@mui/icons-material";

export default function FullPost({ post }: { post: PostProps }) {
  return (
    <div className="p-4 m-2 bg-sky-100 flex flex-col items-center">
      <h2 className="text-4xl font-bold">{post.title}</h2>
      <p className="text-lg">{post.url}</p>
      <div className="flex">
        <div className="p-1 m-1">
          <ThumbUp />
        </div>
        <div className="p-1 m-1">
          <ThumbDown />
        </div>
      </div>
    </div>
  );
}