import { ref } from 'vue';
import { getAuth, signOut } from "firebase/auth";
import { app } from '../config/firebase';
const error = ref(null);
const isPending = ref(false);
const auth = getAuth(app);
async function logout() {
  isPending.value = true;
  error.value = null;
  try {
    const response = await signOut(auth);
    if (!response) {
      throw new Error("Could not create a new user.");
    }
    return response;
  } catch (err) {
    error.value = err.message
  } finally {
    isPending.value = false;
  }
}

export function useLogout() {
  return { error, isPending, logout };
}
