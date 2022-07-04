<template>
  <footer id="footer" class="fixed w-full bottom-0 left-0 bg-white pt-4 p-b-safe-4">
      <div class="container mx-auto px-8 h-full">
        <ul class="flex justify-between h-full items-start">
            <li v-for="nav in navItems" :key="nav.name">
                <router-link :to="{name:nav.name,params:{}}">
                    <font-awesome-icon :icon="nav.icon" />
                </router-link>
            </li>
        </ul>
      </div>
  </footer>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
        const navItems = reactive([
        {
            icon:'fa-solid fa-house',
            text:'Home',
            name:'home'
        },
          {
            icon:'fa-solid fa-bug',
            text:'Report',
            name:'report'
        },
          {
            icon:'fa-solid fa-burger',
            text:'Budget',
            name:'budget'
        },
          {
            icon:'fa-solid fa-user',
            text:'Profile',
            name:'profile'
        }
    ])
    return {
        navItems
    }
  }
}
</script>

<style lang="css" scoped>
footer#footer::before,footer#footer::after {
    @apply absolute;
    left: 50%;
    transform: translateX(-50%);
}
footer#footer::before {
    @apply absolute;
    @apply bg-slate-200;
    content:"";
    width: 60px;
    height: 30px;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
    top: 0;
    left: 50%;
}
footer#footer::after {
    @apply absolute flex items-center justify-center text-white -top-6;
    @apply bg-primary w-12 h-12 rounded-full cursor-pointer;
    content: "\e921";
}
</style>