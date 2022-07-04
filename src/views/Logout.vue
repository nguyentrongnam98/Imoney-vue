<template>
  
</template>

<script>
import { useLogout } from '../composables/useLogout';
import { useRouter } from 'vue-router';
export default {
 setup() {
    const { error, logout } = useLogout()
    const router = useRouter()
    const onLogout = async () => {
       await logout()
       console.log(error,98);
         router.push({name:'login',params:{}})
    }
    onLogout()
    return {error}
 }
}
</script>

<style>

</style>