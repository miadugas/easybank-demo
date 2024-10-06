<template>
  <div>
    <button
      type="button"
      class="relative inline-flex items-center justify-center w-[163px] h-[44px] rounded-full bg-gradient-to-r from-[#33D35E] to-[#2AB6D9] text-white text-14px font-bold shadow-md hover:bg-gradient-to-r hover:from-[#4DED75] hover:to-[#4DC6E2]"
      @click="openModal"
    >
      Request Invite
    </button>
    <TransitionRoot as="template" :show="open">
      <Dialog class="relative z-10" @close="open = false">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div class="py-8">
                  <div class="mx-auto flex items-center justify-center">
                    <img class="w-[139px] h-[20px]" src="../assets/logo.svg" alt="Easybank" />
                  </div>
                  <div class="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-[#2D314D]">Request an Invitation</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-[#9597A5]">
                        Please enter your email address to request an invitation. You will receive a unique invite code that you can use to join our platform. We look forward to welcoming you!
                      </p>
                      <input type="email" v-model="email" @input="validateEmail" placeholder="Enter your email address" :class="{'border-red-500': emailError, 'border-gray-300': !emailError}" class="w-full p-2 border rounded mt-4 custom-focus:border-[#30C88F]" /> 
                      <p v-if="emailError" class="text-sm text-red-500 mt-2">{{ emailError }}</p>

                      <input type="text" v-model="inviteCode" disabled class="w-full p-2 mt-2 border rounded bg-gray-100 text-center text-[#9597A5]" />
                      <p class="text-sm text-[#9597A5] mt-2 ">
                        This is your unique invite code. No need to write it down, it will be sent to your email address in your invitation.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button type="button" class="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm bg-gradient-to-r from-[#33D35E] to-[#2AB6D9] text-white text-14px font-bold shadow-md  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2" 
                  @click="submitRequest" :disabled="emailError || !email ? true : undefined"
                  >Submit</button>
                  <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0" @click="open = false" ref="cancelButtonRef">Cancel</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const open = ref(false)
const email = ref('')
const emailError = ref('')
const inviteCode = ref('')

const generateInviteCode = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const validateEmail = () => {
  if (email.value.length < 10) {
    emailError.value = 'Email must be at least 10 characters long';
    return;
  }
  
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!re.test(email.value)) {
    emailError.value = 'Please enter a valid email address';
  } else {
    emailError.value = '';
  }
}

const openModal = () => {
  inviteCode.value = generateInviteCode();
  open.value = true;
}

const submitRequest = () => {
  // Handle submit logic later here
  console.log(`Email: ${email.value}, Invite Code: ${inviteCode.value}`);
  open.value = false;
}
</script>

<style scoped>
.custom-focus\:border-\[\#30C88F\]:focus {
  border-color: #30C88F !important;
}
</style>
