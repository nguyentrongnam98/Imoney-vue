<template>
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
            alt="user profile avatar"
            class="w-full h-auto object-cover"
          />
        </div>
        <div class="font-bold text-2xl text-primary mt-3">{{user?.displayName}}</div>
        <p class="font-semibold text-gray-400 mt-1">{{user?.email}}</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="container mx-auto px-8">
       <div class="grid grid-cols-1">
          <div class="col-span-1">
            <h3 class="font-bold text-xl text-primary mb-2">General</h3>
          </div>  
       </div>
           <div class="grid grid-cols-1">
          <div class="col-span-1">
            <ul>
                <li v-for="option in profileOption" :key="option.name">
                    <router-link :to="{ name: option.route.name, params: option.route.params}" class="flex items-center py-3 justify-between">
                        <div class="flex items-center text-left" :class="{'text-red' : option.isLogout}">
                          <font-awesome-icon :icon="option.icon" class="text-2xl"/>
                          <h5 class="font-semibold ml-3">{{option.name}}</h5>
                        </div>
                        <div class="text-right">
                            <font-awesome-icon icon="fa-solid fa-arrow-right" />
                        </div>
                    </router-link>
                </li>
            </ul>
          </div>  
       </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useUser } from '../composables/useUser';
export default {
    setup() {
        const { getUser } = useUser()
        const  user  = getUser()
        const profileOption = reactive([
            {
                name:'My wallet',
                icon:'fa-solid fa-wallet',
                isLogout:false,
                route: {
                    name:'wallet',
                    params:{}
                }
            },
              {
                name:'Tools',
                icon:'fa-solid fa-hammer',
                isLogout:false,
                route: {
                    name:'tools',
                    params:{}
                }
            },
              {
                name:'Private',
                icon:'fa-solid fa-key',
                isLogout:false,
                route: {
                    name:'private',
                    params:{}
                }
            },
              {
                name:'About',
                icon:'fa-solid fa-address-card',
                isLogout:false,
                route: {
                    name:'about',
                    params:{}
                }
            },
              {
                name:'Log out',
                icon:'fa-solid fa-arrow-right-from-bracket',
                isLogout:true,
                route: {
                    name:'logout',
                    params:{}
                }
            }
        ])
        return {
          profileOption,
          user
        }
    }
};
</script>

<style>
</style>