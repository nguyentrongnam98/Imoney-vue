<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form @submit.prevent="onSubmit">
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
            type="submit"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
            v-if="!isPending"
          >
            Sign In
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
        <span class="font-semibold">I'm a new user.</span>
        <span class="ml-2 text-primary">
          <router-link :to="{ name: 'register', params: {} }"
            >Sign Up</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useLogin } from "../composables/useLogin";
import { useRouter } from 'vue-router';
export default {
  setup() {
    const { error, isPending, login } = useLogin();
    const email = ref("");
    const password = ref("");
    const router = useRouter()
    const onSubmit = async () => {
      await login(email.value, password.value);
      if (!error) router.push({name:'home',params:{}})
    };
    return {
      onSubmit,
      email,
      password,
      error,
      isPending,
    };
  },
};
</script>

<style></style>
