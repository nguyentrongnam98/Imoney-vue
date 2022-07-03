import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../config/firebase';
const error = ref(null);
const isPending = ref(false);
const auth = getAuth(app);
async function login(email, password) {
  isPending.value = true;
  error.value = null;
  try {
    const response = await signInWithEmailAndPassword(auth,email, password);
    if (!response) {
      throw new Error("Could not create a new user.");
    }
    return response;
  } catch (err) {
    error.value = 'Email or password not true !'
  } finally {
    isPending.value = false;
  }
}

export function useLogin() {
  return { error, isPending, login };
}