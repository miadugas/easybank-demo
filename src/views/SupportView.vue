<template>
  <section class="support-page py-12 px-8">
    <div class="container mx-auto max-w-5xl">
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">We're Here to Help</h1>
        <p class="text-lg text-gray-600">
          Explore our resources or reach out for assistance.
        </p>
        <img src="@/assets/support.jpg" alt="Support" class="mx-auto mt-6 w-full max-w-md" />
      </div>

      <!-- Live Chat and Knowledge Base Links -->
      <div class="flex flex-col md:flex-row justify-center items-center mb-12 space-y-4 md:space-y-0 md:space-x-8">
        <button @click="openLiveChat" class="flex items-center px-6 py-3 bg-[#30C88F] text-white rounded-md shadow-md hover:bg-[#2bb47f]">
          <ChatBubbleLeftEllipsisIcon class="h-5 w-5 mr-2" />
          Live Chat
        </button>
        <router-link to="/knowledge-base" class="flex items-center px-6 py-3 bg-white text-[#30C88F] border border-[#30C88F] rounded-md shadow-md hover:bg-[#f0fdf4]">
          <BookOpenIcon class="h-5 w-5 mr-2" />
          Knowledge Base
        </router-link>
      </div>

      <!-- FAQ Section -->
      <div class="faq-section mb-12">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="border-b border-gray-200 pb-4">
            <button @click="toggleFaq(index)" class="w-full text-left flex justify-between items-center text-gray-800 font-medium focus:outline-none">
              <span>{{ faq.question }}</span>
              <ChevronDownIcon :class="{'transform rotate-180': faq.open}" class="h-5 w-5 transition-transform duration-200" />
            </button>
            <div v-if="faq.open" class="mt-2 text-gray-600">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>

      <!-- Support Ticket Form -->
      <div class="support-form">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Submit a Support Ticket</h2>
        <form @submit.prevent="submitForm" class="space-y-6 bg-white p-8 rounded-md shadow-md">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#30C88F] focus:border-[#30C88F]"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#30C88F] focus:border-[#30C88F]"
              />
            </div>
          </div>
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              id="subject"
              v-model="form.subject"
              required
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#30C88F] focus:border-[#30C88F]"
            />
          </div>
          <div>
            <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
            <select
              id="category"
              v-model="form.category"
              required
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#30C88F] focus:border-[#30C88F]"
            >
              <option value="" disabled>Select a category</option>
              <option v-for="category in categories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="5"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#30C88F] focus:border-[#30C88F]"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              :disabled="!isFormValid"
              class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#30C88F] hover:bg-[#2bb47f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#30C88F] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { BookOpenIcon, ChevronDownIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/vue/24/solid';


// FAQ data
const faqs = ref([
  {
    question: 'How do I reset my password?',
    answer: 'To reset your password, go to the login page and click on "Forgot Password".',
    open: false,
  },
  {
    question: 'Where can I view my account statements?',
    answer: 'Account statements are available under the "My Account" section after logging in.',
    open: false,
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can reach us via the support ticket form or live chat.',
    open: false,
  },
  // Add more FAQs as needed
]);

// Function to toggle FAQ open state
const toggleFaq = (index: number) => {
  faqs.value[index].open = !faqs.value[index].open;
};

// Support ticket form data
const form = ref({
  name: '',
  email: '',
  subject: '',
  category: '',
  message: '',
});

const categories = [
  'Account Issues',
  'Technical Support',
  'Billing',
  'Feedback',
  'Other',
];

const isFormValid = computed(() => {
  return (
    form.value.name.trim() !== '' &&
    form.value.email.trim() !== '' &&
    form.value.subject.trim() !== '' &&
    form.value.category.trim() !== '' &&
    form.value.message.trim() !== ''
  );
});

const submitForm = () => {
  // Mock form submission logic
  console.log('Support ticket submitted:', form.value);
  alert('Your support ticket has been submitted. We will get back to you shortly.');
  // Reset the form
  form.value = { name: '', email: '', subject: '', category: '', message: '' };
};

// Placeholder function for Live Chat
const openLiveChat = () => {
  alert('Live Chat is currently unavailable. Please submit a support ticket or check our FAQ.');
};
</script>

<style scoped>
.support-page {
  /* Additional styling as needed */
}

.faq-section button:focus {
  outline: none;
}

.faq-section button {
  transition: background-color 0.2s;
}

.faq-section button:hover {
  background-color: #f9f9f9;
}

.support-form {
  /* Styling for the support form */
}

.support-form input,
.support-form select,
.support-form textarea {
  background-color: #f9f9f9;
}

.support-form input:focus,
.support-form select:focus,
.support-form textarea:focus {
  background-color: #fff;
}
</style>
