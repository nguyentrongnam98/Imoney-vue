<template>
   <header id="header" class="py-8">
    <div class="container mx-auto px-8">
        <div class="flex justify-between items-center">
            <div class="flex items-center">
               <div class="w-10 h-10 rounded-full overflow-hidden" v-if="meta.leading">
                <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="avatar" class="w-full h-auto object-cover">
               </div>
               <h1 class="font-bold text-xl text-dark ml-2">{{meta.text}}</h1>
            </div>
            <div class="flex">
                <ul>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-bell" class="text-2xl"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
   </header>
</template>

<script>
import {computed} from 'vue'
import { useRoute } from 'vue-router'
export default {
 setup() {
    const route = useRoute()
    return {
        meta:computed(() =>route.meta)
    }
 }
}
</script>

<style>

</style>