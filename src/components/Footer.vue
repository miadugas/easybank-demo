<template>
  <footer class="bg-[#2d314d] text-white py-12 px-8">
    <div class="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start">
      <div class="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12 items-center lg:items-start">
        <div class="flex flex-col items-center lg:items-start space-y-8">
          <img class="w-[139px] h-[20px]" src="../assets/logo_white.svg" alt="Easybank" />
          <div class="flex space-x-4">
            <div class="flex space-x-6">
              <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-white hover:text-[#30C88F]">
                <span class="sr-only">{{ item.name }}</span>
                <component :is="item.icon" class="h-[24px] w-[24px]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <nav class="flex flex-wrap justify-center lg:justify-start">
          <ul class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-16 lg:gap-y-4 text-center lg:text-left">
            <li><a href="javascript:window.location.reload(true)" class="text-white hover:text-[#30C88F]">About Us</a></li>
            <li><a href="javascript:window.location.reload(true)" class="text-white hover:text-[#30C88F] text-[15px]">Contact</a></li>
            <li><a href="javascript:window.location.reload(true)" class="text-white hover:text-[#30C88F] text-[15px]">Blog</a></li>
            <li><a href="javascript:window.location.reload(true)" class="text-white hover:text-[#30C88F] text-[15px]">Careers</a></li>
            <li><a href="javascript:window.location.reload(true)" class="text-white hover:text-[#30C88F] text-[15px]">Support</a></li>
            <li><a href="javascript:window.location.reload(true)" class="text-white hover:text-[#30C88F] text-[15px]">Privacy Policy</a></li>
          </ul>
        </nav>
      </div>
      <div class="flex flex-col items-center lg:items-end space-y-6 mt-8 lg:mt-0">
        <RequestInviteButton />
        <p class="text-sm text-gray-400 text-[15px]">© Easybank. All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import RequestInviteButton from './RequestInviteButton.vue';

const navigation = {
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'X',
      href: 'https://x.com/?lang=en',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              d: 'M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z',
            }),
          ]),
      }),
    },
    {
      name: 'Pinterest',
      href: 'https://www.pinterest.com/',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              d: 'M12 2.042c-5.512 0-9.958 4.445-9.958 9.958 0 4.21 2.639 7.792 6.29 9.229-.086-.782-.163-1.983.034-2.837.178-.762 1.146-4.855 1.146-4.855s-.291-.584-.291-1.445c0-1.354.784-2.363 1.758-2.363.83 0 1.231.623 1.231 1.37 0 .835-.532 2.086-.807 3.247-.23.97.487 1.76 1.446 1.76 1.735 0 3.065-1.831 3.065-4.468 0-2.332-1.676-3.96-4.065-3.96-2.768 0-4.396 2.078-4.396 4.225 0 .834.32 1.73.72 2.217a.287.287 0 01.066.27c-.073.3-.237.968-.27 1.1-.042.178-.138.216-.32.13-1.18-.545-1.918-2.246-1.918-3.63 0-2.95 2.143-5.658 6.183-5.658 3.244 0 5.754 2.31 5.754 5.403 0 3.21-2.02 5.792-4.827 5.792-1.112 0-2.158-.577-2.514-1.26l-.68 2.582c-.247.936-.916 2.104-1.36 2.816.963.296 1.975.458 3.033.458 5.513 0 9.958-4.445 9.958-9.958S17.513 2.042 12 2.042z'
            }),
          ]),
      }),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
  ],
}
</script>
