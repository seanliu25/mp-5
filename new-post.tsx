import { Button, FormHelperText, TextField } from "@mui/material";
import { Textarea } from "@mui/joy";
import { useState } from "react";

export default function NewPost({
  createFunc,
}: {
  createFunc: (title: string, content: string) => Promise<boolean>;
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function submitNewPost() {
    if (await createFunc(title, content)) {
      setTitle("");
      setContent("");
    }
  }

  return (
    <form
      className="w-96 rounded-xl p-4 bg-sky-300"
      onSubmit={(e) => { e.preventDefault(); submitNewPost(); }}
    >
      <TextField
        variant="filled"
        sx={{ backgroundColor: "white", width: "100%" }}
        label="alias"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        sx={{
          padding: "0.5rem",
          height: "100px",
          width: "100%",
          borderRadius: 0,
        }}
        variant="soft"
        placeholder="url"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <FormHelperText>Enter your URL and title</FormHelperText>
      <div className="w-full flex justify-center">
        <Button
          sx={{ width: "80px" }}
          variant="contained"
          type="submit"
          disabled={title.length === 0 || content.length === 0}
        >
          Create
        </Button>
      </div>
    </form>
  );
}
