<template>
  <div>
    <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <router-link to="/" class="flex-shrink-0">
              <img class="w-[139px] h-[20px]" src="../assets/logo.svg" alt="Easybank" />
            </router-link>
            </div>
          </div>
          <div class="hidden sm:flex sm:space-x-4 sm:items-center sm:justify-center flex-grow text-[#9597A5]">
            <router-link
              to="/"
              class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-[#9597A5] hover:text-[#2D314D]"
              :class="{ 'border-[#33D35E] text-[#2D314D]': isActive('home'), 'border-transparent': !isActive('home') }"
              @click="setActive('home')"
            >
              Home
            </router-link>
            <router-link
              to="/about"
              class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-[#9597A5] hover:text-[#2D314D]"
              :class="{ 'border-[#33D35E] text-[#2D314D]': isActive('about'), 'border-transparent': !isActive('about') }"
              @click="setActive('about')"
            >
              About
            </router-link>
            <router-link
              to="/contact"
              class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-[#9597A5] hover:text-[#2D314D]"
              :class="{ 'border-[#33D35E] text-[#2D314D]': isActive('contact'), 'border-transparent': !isActive('contact') }"
              @click="setActive('contact')"
            >
              Contact
            </router-link>
            <router-link
              to="/blog"
              class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-[#9597A5] hover:text-[#2D314D]"
              :class="{ 'border-[#33D35E] text-[#2D314D]': isActive('blog'), 'border-transparent': !isActive('blog') }"
              @click="setActive('blog')"
            >
              Blog
            </router-link>
            <router-link
              to="/careers"
              class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-[#9597A5] hover:text-[#2D314D]"
              :class="{ 'border-[#33D35E] text-[#2D314D]': isActive('careers'), 'border-transparent': !isActive('careers') }"
              @click="setActive('careers')"
            >
            Careers
            </router-link>
            <router-link
              to="/support"
              class="inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium text-[#9597A5] hover:text-[#2D314D]"
              :class="{ 'border-[#33D35E] text-[#2D314D]': isActive('support'), 'border-transparent': !isActive('support') }"
              @click="setActive('support')"
            >
            Support
            </router-link>

          </div>
          <div class="-mr-2 flex sm:hidden">
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#2D314D] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="hidden sm:flex flex-shrink-0">
            <RequestInviteButton />
          </div>
        </div>
      </div>
      <DisclosurePanel class="sm:hidden fixed top-16 left-0 right-0 z-50 bg-white shadow-lg">
        <div class="flex flex-col items-center space-y-1 px-2 pb-3 pt-2 w-full">
          <router-link
            to="/"
            class="block w-full text-center rounded-md px-3 py-2 text-base font-medium hover:bg-[#2D314D] hover:text-white"
            :class="{ 'bg-[#2D314D] text-white': isActive('home'), 'text-[#2D314D]': !isActive('home') }"
            @click="setActive('home')"
          >
            Home
          </router-link>
          <router-link
            to="/about"
            class="block w-full text-center rounded-md px-3 py-2 text-base font-medium hover:bg-[#2D314D] hover:text-white"
            :class="{ 'bg-[#2D314D] text-white': isActive('about'), 'text-[#2D314D]': !isActive('about') }"
            @click="setActive('about')"
          >
            About
          </router-link>
          <router-link
            to="/contact"
            class="block w-full text-center rounded-md px-3 py-2 text-base font-medium hover:bg-[#2D314D] hover:text-white"
            :class="{ 'bg-[#2D314D] text-white': isActive('contact'), 'text-[#2D314D]': !isActive('contact') }"
            @click="setActive('contact')"
          >
            Contact
          </router-link>
          <router-link
            to="/blog"
            class="block w-full text-center rounded-md px-3 py-2 text-base font-medium hover:bg-[#2D314D] hover:text-white"
            :class="{ 'bg-[#2D314D] text-white': isActive('blog'), 'text-[#2D314D]': !isActive('blog') }"
            @click="setActive('blog')"
          >
            Blog
          </router-link>
          <router-link
            to="/careers"
            class="block w-full text-center rounded-md px-3 py-2 text-base font-medium hover:bg-[#2D314D] hover:text-white"
            :class="{ 'bg-[#2D314D] text-white': isActive('careers'), 'text-[#2D314D]': !isActive('careers') }"
            @click="setActive('careers')"
          >
            Careers
          </router-link>
          <router-link
            to="/support"
            class="block w-full text-center rounded-md px-3 py-2 text-base font-medium hover:bg-[#2D314D] hover:text-white"
            :class="{ 'bg-[#2D314D] text-white': isActive('support'), 'text-[#2D314D]': !isActive('support') }"
            @click="setActive('support')"
          >
            Support
          </router-link>

        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>


<script setup lang="ts">
import { ref }from 'vue'
import RequestInviteButton from './RequestInviteButton.vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'


const activeLink = ref('home')

function setActive(link: string) {
  activeLink.value = link
}

function isActive(link: string) {
  return activeLink.value === link
}
</script>

<style scoped>
</style>
