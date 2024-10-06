<template>
  <div class="relative bg-gray-50 py-16 px-6 sm:px-8 lg:px-16 xl:px-24">
    <div class="mx-auto max-w-xl lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-24 lg:items-start">
      <!-- Contact Form -->
      <div class="lg:relative">
        <h2 class="text-4xl font-bold tracking-tight text-gray-900">Get in Touch with Us</h2>
        <p class="mt-4 text-lg text-gray-600">We are here to help you with all your banking needs. Please fill out the form, and our representative will get back to you shortly.</p>

        <form action="#" method="POST" class="mt-16 bg-white p-8 shadow-lg rounded-lg lg:relative">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label for="first-name" class="block text-sm font-semibold text-gray-900">First Name</label>
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-2 block w-full rounded-md border border-gray-500 px-4 py-2 text-gray-900 shadow-sm sm:text-sm focus:border-green-700 focus:ring-2 focus:ring-green-700" />
            </div>

            <div>
              <label for="last-name" class="block text-sm font-semibold text-gray-900">Last Name</label>
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-2 block w-full rounded-md border border-gray-500 px-4 py-2 text-gray-900 shadow-sm sm:text-sm focus:border-green-700 focus:ring-2 focus:ring-green-700" />
            </div>

            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-semibold text-gray-900">Email Address</label>
              <input type="email" name="email" id="email" autocomplete="email" class="mt-2 block w-full rounded-md border border-gray-500 px-4 py-2 text-gray-900 shadow-sm sm:text-sm focus:border-green-700 focus:ring-2 focus:ring-green-700" />
            </div>

            <div class="sm:col-span-2">
              <label for="phone" class="block text-sm font-semibold text-gray-900">Phone Number</label>
              <input type="tel" name="phone" id="phone" autocomplete="tel" class="mt-2 block w-full rounded-md border border-gray-500 px-4 py-2 text-gray-900 shadow-sm sm:text-sm focus:border-green-700 focus:ring-2 focus:ring-green-700" />
            </div>

            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold text-gray-900">Message</label>
              <textarea id="message" name="message" rows="5" class="mt-2 block w-full rounded-md border border-gray-500 px-4 py-2 text-gray-900 shadow-sm sm:text-sm focus:border-green-700 focus:ring-2 focus:ring-green-700"></textarea>
            </div>
          </div>

          <div class="mt-10">
            <button type="submit" class="block w-full rounded-md bg-green-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2">Submit</button>
          </div>

          <p class="mt-4 text-sm text-gray-500">By submitting this form, you agree to our 
            <router-link to="/privacy-policy" class="font-semibold text-green-700 underline hover:text-green-900">
              privacy policy
            </router-link>
        </p>
        </form>
      </div>

      <!-- Image Section -->
      <div class="mt-16 lg:mt-0 lg:absolute lg:inset-0 lg:left-1/2">
        <img class="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full" src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80" alt="Bank Branch" />
      </div>
    </div>
  </div>
</template>

<style scoped>
:root {
  --green-700: hsl(136, 65%, 41%);
}
</style>

