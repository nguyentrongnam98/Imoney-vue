<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white pt-4 p-b-safe-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full items-start">
        <li v-for="nav in navItems" :key="nav.name">
          <router-link :to="{ name: nav.name, params: {} }">
            <font-awesome-icon :icon="nav.icon" />
          </router-link>
        </li>
      </ul>
    </div>
    <div
      data-s
      class="top-0 absolute left-1/2 transform -translate-x-1/2"
    ></div>
    <div
      data-i
      class="
        flex
        justify-center
        items-center
        bg-primary
        text-white
        w-12
        h-12
        rounded-full
        cursor-pointer
        -top-6
        absolute
        transform
        left-1/2
        -translate-x-1/2
      "
      @click="goToRoute"
    >
      +
    </div>
  </footer>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter()
    const navItems = reactive([
      {
        icon: "fa-solid fa-house",
        text: "Home",
        name: "home",
      },
      {
        icon: "fa-solid fa-bug",
        text: "Report",
        name: "report",
      },
      {
        icon: "fa-solid fa-burger",
        text: "Budget",
        name: "budget",
      },
      {
        icon: "fa-solid fa-user",
        text: "Profile",
        name: "profile",
      },
    ]);
    const goToRoute = () => {
       router.push({name:'new-transaction',params:{}})
    }
    return {
      navItems,
      goToRoute
    };
  },
};
</script>

<style lang="css" scoped>
footer#footer > div[data-s] {
  @apply absolute;
  @apply bg-slate-200;
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
}
footer#footer > div[data-s] > div {
  content: "\e921";
}
ul li:nth-child(2) {
  margin-right: 10%;
}
ul li:nth-child(3) {
  margin-left: 10%;
}
</style>