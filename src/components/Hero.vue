<template>
  <div class="relative overflow-hidden">
    <!-- Hero Section -->
    <section class="relative bg-[#FAFAFA] z-10">
      <div class="mobile-container">
        <!-- Image container for mobile -->
        <div class="image-container relative overflow-visible mb-8 lg:hidden">
          <img src="../assets/bg-intro-desktop.svg" class="bg-blob absolute" alt="background" />
          <img src="../assets/image-mockups.png" 
               class="phone-mockup absolute" 
               alt="phone mockups" />
        </div>
        <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div class="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
            <div class="mx-auto max-w-2xl lg:mx-0">
              <h1 class="text-[40px] lg:text-[56px] font-bold tracking-tight text-gray-900 leading-tight">Next generation digital banking</h1>
              <p class="mt-6 text-[15px] lg:text-[18px] leading-7 lg:leading-8 text-[#9597A5]">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
              <div class="mt-10 flex items-center justify-center lg:justify-start">
                <RequestInviteButton />
              </div>
            </div>
          </div>
          <!-- Desktop image container -->
          <div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0 overflow-visible hidden lg:block">
            <img src="../assets/bg-intro-desktop.svg" class="bg-blob absolute" alt="background" />
            <img src="../assets/image-mockups.png" 
                 class="phone-mockup absolute" 
                 alt="phone mockups" />
          </div>
        </div>
      </div>
    </section>
    <!-- Feature Section -->
    <!-- <section class="next-section relative z-0 bg-[#F4F5F7] pt-24 lg:pt-48 pb-24">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
      <h2 class="mt-16 lg:mt-0 text-[32px] lg:text-[40px] font-bold tracking-tight text-[#2D314D]">Why choose Easybank?</h2>
      <p class="mt-6 text-[15px] lg:text-[18px] leading-7 lg:leading-8 text-[#9597A5]">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
        <div v-for="feature in features" :key="feature.name" class="flex flex-col items-center lg:items-start text-center lg:text-left">
          <dt class="text-base font-semibold leading-7 text-gray-900">
            <div class="mb-6 flex h-18 w-18 items-center justify-center rounded-full bg-gradient-to-r from-[#33D35E] to-[#2AB6D9] mx-auto lg:mx-0">
  <img :src="feature.icon" class="h-full w-full object-contain" aria-hidden="true" />
</div>
<div class="text-[#2D314D] text-[20px] lg:text-[24px] font-bold">
              {{ feature.name }}
            </div>
          </dt>
          <dd class="mt-1 flex flex-auto flex-col text-[15px] lg:text-[16px] leading-7 text-[#9597A5]">
            <p class="flex-auto">{{ feature.description }}</p>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</section> -->
  </div>
</template>


<script setup lang="ts">
import RequestInviteButton from './RequestInviteButton.vue'

const baseUrl = import.meta.env.BASE_URL;

const features = [
  {
    name: 'Online Banking',
    description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
    href: '#',
    icon: `${baseUrl}src/assets/icon-online.svg`,
  },
  {
    name: 'Simple Budgeting',
    description: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
    href: '#',
    icon: `${baseUrl}src/assets/icon-budgeting.svg`,
  },
  {
    name: 'Fast Onboarding',
    description: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
    href: '#',
    icon: `${baseUrl}src/assets/icon-onboarding.svg`,
  },
  {
    name: 'Open API',
    description: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
    href: '#',
    icon: `${baseUrl}src/assets/icon-api.svg`,
  },
]
</script>

<style scoped>
.mobile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
}

.image-container {
  width: 100%;
  height: 400px; /* Adjust as needed */
  position: relative;
}

.bg-blob {
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: auto;
  max-width: 400px;
}

.phone-mockup {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 350px;
  height: auto;
  z-index: 1;
}

@media (min-width: 1024px) {
  .mobile-container {
    display: block;
    text-align: left;
    padding: 0;
  }

  .bg-blob {
    top: -100px;
    left: auto;
    transform: none;
    width: 100%;
    height: 100%;
    max-width: none;
  }

  .phone-mockup {
    top: auto;
    left: auto;
    right: -10%;
    transform: none;
    width: auto;
    max-width: none;
  }
}

.next-section {
  margin-top: -100px;
}
</style>
