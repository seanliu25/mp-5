"use server";
import getCollection, { POSTS_COLLECTION } from "@/db";
import { PostProps } from "@/types";
import { validateUrl, formatUrl } from "./validateUrl";

interface CreatePostResult {
  success: boolean;
  post?: PostProps; // Only present if the operation is successful
  message?: string; // Error or success message for user feedback
}

export default async function createNewPost(
  title: string,
  url: string,
): Promise<CreatePostResult> {
  // Validate URL
  if (!validateUrl(url)) {
    return { success: false, message: "Invalid URL format. Please provide a valid URL." };
  }

  // Format URL to ensure consistent structure
  const formattedUrl = formatUrl(url);

  const postsCollection = await getCollection(POSTS_COLLECTION);

  try {
    // Check for duplicate alias
    const existingAlias = await postsCollection.findOne({ title });
    if (existingAlias) {
      return { success: false, message: "The alias (title) is already taken. Please choose another." };
    }

    // Check for duplicate URL
    const existingUrl = await postsCollection.findOne({ url: formattedUrl });
    if (existingUrl) {
      return { success: false, message: "This URL already exists in the database." };
    }

    // Create the new post object
    const newPost = { title, url: formattedUrl };

    // Insert the new post into the database
    const res = await postsCollection.insertOne(newPost);

    if (!res.acknowledged) {
      return { success: false, message: "Failed to save the post. Please try again." };
    }

    // Return the created post object
    return { success: true, post: newPost, message: "Post successfully created." };
  } catch (error) {
    return { success: false, message: "An error occurred while creating the post." };
  }
}
