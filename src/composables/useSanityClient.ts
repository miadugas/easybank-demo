// composables/useSanityClient.ts
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '0vb8ynmb', // Replace with your Sanity project ID
  dataset: 'production', 
  useCdn: true, // Use CDN for faster results (cached data)
  apiVersion: '2024-10-05', // Use the latest version for the date
});

// Function to use the Sanity client
export function useSanityClient() {
  return client;
}

export async function fetchAllPosts() {
  try {
    const query = `*[_type == "post"]{
      title,
      slug,
      excerpt,
      "imageUrl": mainImage.asset->url,
      publishedAt,
      author->{
        name,
        "imageUrl": image.asset->url
      },
      categories[]->{
        title
      }
    } | order(publishedAt desc)`;

    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

