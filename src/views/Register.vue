<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form @submit.prevent="onSubmit">
        <div class="row">
          <label for="fullName" class="flex flex-col">
            <span class="font-semibold">Full Name :</span>
            <input
              type="text"
              placeholder="iMoney..."
              class="px-4 py-3 rounded-lg border-gray-400 mt-1 border"
              id="fullName"
              v-model="fullName"
            />
          </label>
        </div>
        <div class="row mt-2">
          <label for="email" class="flex flex-col">
            <span class="font-semibold">Email :</span>
            <input
              type="email"
              placeholder="iMoney@gmail.com"
              class="px-4 py-3 rounded-lg border-gray-400 mt-1 border"
              id="email"
              v-model="email"
            />
          </label>
        </div>
        <div class="row mt-2">
          <label for="password" class="flex flex-col">
            <span class="font-semibold">Password :</span>
            <input
              type="password"
              placeholder="*********"
              class="px-4 py-3 rounded-lg border-gray-400 mt-1 border"
              id="password"
              v-model="password"
            />
          </label>
        </div>
        <div v-if="error" class="text-left mt-4 text-red">
          <span>{{ error }}</span>
        </div>
        <div class="row mt-5">
          <button
          v-if="!isPending"
            type="submit"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
          >
            Sign Up
          </button>
          <button
          v-else
            type="submit"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
            disabled
          >
            Loading...
          </button>
        </div>
      </form>

      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm already a member.</span>
        <span class="ml-2 text-primary">
          <router-link :to="{ name: 'login', params: {} }">Sign In</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSignUp } from "../composables/useSignUp";

export default {
  setup() {
    const { signUp, error, isPending } = useSignUp();
    const fullName = ref("");
    const email = ref("");
    const password = ref("");
    const onSubmit = async () => {
      await signUp(fullName.value,email.value, password.value);
    };
    return {
      onSubmit,
      fullName,
      password,
      email,
      error,
      isPending,
    };
  },
};
</script>

<style></style>
