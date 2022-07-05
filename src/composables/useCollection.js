import { ref } from 'vue';
import { getAuth } from "firebase/auth";
import { app,db } from '../config/firebase';
import { doc,setDoc } from 'firebase/firestore';
const auth = getAuth(app);

const useCollection = (name) => {
    const error = ref(null)
    async function addRecord(record,uId) {
        error.value = null
        try {
          const response = await setDoc(doc(db,name,uId),record)
          return response;
        } catch (err) {
          error.value = err.message
        }
      }
    return {
      addRecord,
      error
    }
}

export default useCollection

