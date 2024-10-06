<template>
  <main class="mt-10 w-full flex-auto bg-white">
    <div class="mx-auto max-w-4xl px-6 lg:px-8 py-10">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">{{ post.title }}</h1>
      <div class="text-sm text-gray-600 mb-4">
        <time :datetime="post.publishedAt">{{ formattedDate }}</time> | 
        <span v-if="post.author">{{ post.author.name }}</span>
      </div>
      <div class="mb-8">
        <img :src="post.imageUrl" alt="Blog main image" class="w-full rounded-lg shadow-md" />
      </div>
      <div class="flex flex-wrap gap-2 mb-6">
        <span v-for="category in post.categories" :key="category.title" class="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded">
          {{ category.title }}
        </span>
      </div>
      <div class="prose max-w-none text-gray-800" v-html="postDescription"></div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useSanityClient } from '../composables/useSanityClient';

interface PortableTextBlock {
  _type: string;
  children?: Array<{
    _type: string;
    text: string;
  }>;
}


// Get the Sanity client
const client = useSanityClient();

// Reactive state for the blog post
const post = ref<{
  title: string;
  imageUrl: string;
  publishedAt: string;
  author: { name: string; imageUrl: string };
  categories: { title: string }[];
  body: any;
}>({
  title: '',
  imageUrl: '',
  publishedAt: '',
  author: { name: '', imageUrl: '' },
  categories: [],
  body: [],
});

const postDescription = ref('');
const route = useRoute();

// Function to fetch the post by its slug
const fetchPost = async (slug: string) => {
  try {
    const query = `*[_type == "post" && slug.current == $slug]{
      title,
      "imageUrl": mainImage.asset->url,
      publishedAt,
      author->{
        name,
        "imageUrl": image.asset->url
      },
      categories[]->{
        title
      },
      body
    }`;

    const params = { slug };
    const result = await client.fetch(query, params);

    if (result && result.length > 0) {
      post.value = result[0];
      postDescription.value = convertPortableTextToHtml(post.value.body);
    }
  } catch (error) {
    console.error('Error fetching post:', error);
  }
};

// Function to convert Sanity's Portable Text to HTML (simple text parsing)
const convertPortableTextToHtml = (body: PortableTextBlock[]): string => {
  if (!body) return '';
  return body
    .map((block) => {
      if (block._type === 'block') {
        return block.children?.map((child) => child.text).join('') || '';
      }
      return '';
    })
    .join('\n');
};


// Fetch the post when the component is mounted
onMounted(() => {
  const slug = route.params.slug as string;
  if (slug) {
    fetchPost(slug);
  }
});

const formattedDate = computed(() => {
  return new Date(post.value.publishedAt).toLocaleDateString();
});
</script>

<style scoped>
.prose {
  max-width: 65ch;
  line-height: 1.75;
  margin-top: 1rem;
}
</style>
