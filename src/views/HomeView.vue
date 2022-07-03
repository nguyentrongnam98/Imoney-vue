
<template>
     <div class="mt6">{{user}}</div>
</template>
<script>
import { useUser } from '../composables/useUser';
export default {
  setup(props,context) {
    const { getUser } = useUser()
    // const { user } = getUser()
    console.log('user',getUser());
    return {
      user:1
    }
  }
}
</script>
