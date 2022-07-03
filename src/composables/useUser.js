import {ref} from 'vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from '../config/firebase';
const auth = getAuth(app);
const user = ref(auth?.currentUser?.email);
console.log('user',user.value);
onAuthStateChanged(auth,(_user) => {
   if (_user) {
    user.value = _user.email
   } else {
     console.log('not found');
   }
})
function getUser() {
    console.log(user?.value,123);
   return user.value
}

export function useUser() {
  return { getUser };
}