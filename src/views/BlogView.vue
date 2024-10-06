<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="post in posts" :key="post.slug.current" class="flex flex-col items-start justify-between">
          <div class="relative w-full">
            <img :src="post.imageUrl" alt=""
              class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div class="max-w-xl">
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time :datetime="post.publishedAt" class="text-gray-500">{{ new Date(post.publishedAt).toLocaleDateString()
              }}</time>
            </div>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="category in post.categories" :key="category.title"
                class="inline-block bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                {{ category.title }}
              </span>
            </div>

            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <router-link :to="{ name: 'BlogPost', params: { slug: post.slug.current } }">
                  {{ post.title }}
                </router-link>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.excerpt }}</p>
            </div>

            <div class="relative mt-8 flex items-center gap-x-4">
              <img :src="post.author.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-100" />
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  {{ post.author.name }}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchAllPosts } from '../composables/useSanityClient';

// Reactive state for storing all posts
const posts = ref<
  {
    title: string;
    slug: { current: string };
    excerpt: string;
    imageUrl: string;
    publishedAt: string;
    categories: { title: string }[];
    author: { name: string; imageUrl: string };
  }[]
>([]);

// Fetch all posts when the component is mounted
const loadPosts = async () => {
  try {
    const data = await fetchAllPosts();
    posts.value = data;
    console.log('Fetched Posts:', data); // Log to verify
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
};

onMounted(() => {
  loadPosts();
  console.log('Mounted BlogView', posts); // Log to verify
});

</script>

<style scoped></style>