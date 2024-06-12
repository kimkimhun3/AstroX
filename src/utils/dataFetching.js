// utils/dataFetching.js
import { getCollection } from "astro:content";

export async function getAllAuthors() {
  const allPosts = await getCollection('blog');

  // Extract unique authors from posts
  const authors = [...new Set(allPosts.map(post => post.data.author))];

  return authors.map(author => ({
    slug: author,
    name: author.replace("-", " ").replace(/\b\w/g, char => char.toUpperCase()) // Convert slug to name format
  }));
}

export async function getPostsByAuthor(authorSlug) {
  const allPosts = await getCollection('blog');
  return allPosts.filter(post => post.data.author === authorSlug);
}
