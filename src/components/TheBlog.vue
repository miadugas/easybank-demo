<template>
  <div>
    <div class="bg-[#FAFAFA] py-14 sm:py-18">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
          <h2 class="text-[32px] lg:text-[40px] font-bold tracking-tight text-gray-900">Latest Articles</h2>
        </div>

        <!-- Article List -->
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <article v-for="post in posts" :key="post.slug.current" class="flex flex-col items-center lg:items-start justify-between">
            <div class="relative w-full">
              <router-link :to="{ name: 'BlogPost', params: { slug: post.slug.current } }">
                <img :src="post.imageUrl" alt="" class="aspect-[16/9] w-full rounded-t-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
                <div class="absolute inset-0 rounded-t-2xl ring-1 ring-inset ring-gray-900/10"></div>
              </router-link>
            </div>
            <div class="max-w-xl bg-white p-4 rounded-b-2xl text-center lg:text-left">
              <div class="mt-8 flex justify-between items-center text-xs">
                <time :datetime="post.publishedAt" class="text-[#9597A5] text-[10px]">{{ formattedDate(post.publishedAt) }}</time>
                <span v-if="post.categories && post.categories.length > 0" class="relative z-10 rounded-full bg-[#F4F5F7] px-3 py-1.5 font-medium text-[#9597A5] hover:bg-gray-100 text-[10px]">
                  {{ post.categories[0].title }}
                </span>
              </div>
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-green-500 group-hover:text-[#30C88F]">
                  <router-link :to="{ name: 'BlogPost', params: { slug: post.slug.current } }">
                    {{ post.title }}
                  </router-link>
                </h3>
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-[#9597A5] text-[13px]">{{ post.excerpt }}</p>
              </div>
              <div class="relative mt-8 flex flex-col lg:flex-row items-center lg:items-start gap-y-2 lg:gap-y-0 gap-x-4">
                <img :src="post.author?.imageUrl" alt="" class="h-10 w-10 rounded-full bg-gray-100" />
                <div class="text-sm leading-6">
                  <p class="font-semibold text-[#2D314D]">
                    <span>
                      {{ post.author?.name }}
                    </span>
                  </p>
                  <p class="text-[#9597A5]">{{ post.author?.role }}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchAllPosts } from '../composables/useSanityClient';

// Define reactive posts array
const posts = ref<
  {
    title: string;
    slug: { current: string };
    excerpt: string;
    imageUrl: string;
    publishedAt: string;
    categories: { title: string }[];
    author: { name: string; imageUrl: string; role?: string };
  }[]
>([]);

// Fetch posts from Sanity when component mounts
const loadPosts = async () => {
  try {
    const data = await fetchAllPosts();
    posts.value = data;
    console.log('Fetched Posts:', data); // Debugging to verify data fetching
  } catch (error) {
    console.error('Failed to fetch posts:', error);
  }
};

// Format the date to a readable format
const formattedDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

onMounted(() => {
  loadPosts();
});
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
