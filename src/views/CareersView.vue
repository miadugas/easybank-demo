<template>
  <div class="bg-[#FAFAFA] min-h-screen">
    <div class="relative isolate">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          class="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
          <img class="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="" />
          <div class="w-full flex-auto">
            <h2 class="text-3xl font-bold tracking-tight text-[#9597A5]:text-4xl">Join Our Team at Easybank</h2>
            <p class="mt-6 text-lg leading-8 text-gray-500">
              At Easybank, we believe in empowering our employees to grow, innovate, and make a difference in the
              financial industry. We offer a dynamic work environment, competitive benefits, and opportunities for career
              development. Come be a part of a team that is transforming the future of banking and making financial
              services accessible for everyone.
            </p>

            <ul role="list" class="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-gray-500 sm:grid-cols-2">
              <li v-for="benefit in benefits" :key="benefit" class="flex gap-x-3">
                <CheckCircleIcon class="h-7 w-5 flex-none text-green-500" aria-hidden="true" />
                {{ benefit }}
              </li>
            </ul>
            <div class="mt-10 flex">
              <a href="https://www.glassdoor.com/index.htm" target="_blank" class="text-sm font-semibold leading-6 text-green-500 hover:text-green-600">See our job postings <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]
</script>




<style scoped></style>