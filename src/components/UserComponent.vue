<template>
  <div id="UserComponent">
    <img
      @click="openMenu = !openMenu"
      src="https://via.placeholder.com/40"
      data-tooltip-target="tooltip-no-arrow-user"
      data-tooltip-placement="bottom"
      class="rounded-full w-8 cursor-pointer"
    />
    <div
      id="tooltip-no-arrow-user"
      role="tooltip"
      class="inline-block absolute invisible text-xs z-10 py-1 px-2 font-medium text-white rounded-sm shadow-sm opacity-0 tooltip dark:bg-gray-600 delay-150 bg-black"
    >
      <div>Google Account</div>
      <div class="text-gray-300">userStore.firstName userStore.lastName</div>
      <div class="text-gray-300">userStore.email</div>
    </div>
    <div
      v-show="openMenu"
      class="absolute z-10 w-80 right-2 bg-white top-14 rounded-lg custom-shadow"
    >
      <div class="w-full flex justify-center">
        <img
          class="rounded-full w-20 mt-4"
          src="https://via.placeholder.com/40"
        />
      </div>
      <div class="text-gray-700 w-full flex justify-center mt-2 text-lg">
        userStore.firstName userStore.lastName
      </div>
      <div
        class="text-gray-700 w-full flex justify-center text-sm pb-4 border-b"
      >
        userStore.email
      </div>
      <div class="flex justify-center my-5">
        <button
          class="bg-transparent text-xs hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-300 rounded"
        >
          Sign out of Gmail
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let openMenu = ref(false);
</script>