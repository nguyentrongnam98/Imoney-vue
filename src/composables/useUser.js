import {ref} from 'vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from '../config/firebase';
const auth = getAuth(app);
const user = ref(auth?.currentUser);
onAuthStateChanged(auth,(_user) => {
   if (_user) {
    user.value = _user
   } else {
     console.log('not found');
   }
})
function getUser() {
  console.log(user,123);
   return user.value
}

export function useUser() {
  return { getUser };
}