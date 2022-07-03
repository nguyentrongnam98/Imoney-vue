import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../config/firebase';
const error = ref(null);
const isPending = ref(false);
const auth = getAuth(app);
async function signUp(fullName,email, password) {
  isPending.value = true;
  error.value = null;
  try {
    const response = await createUserWithEmailAndPassword(auth,email, password);
    if (!response) {
      throw new Error("Could not create a new user.");
    }
    await response.user.displayName(fullName)
    return response;
  } catch (err) {
    error.value = 'The email address is adready in use by another account.'
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, signUp };
}
