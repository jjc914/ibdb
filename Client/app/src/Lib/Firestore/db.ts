import { v4 as uuidv4 } from 'uuid'
import { rtdb } from './firestoreSetup'
import { ref, set } from 'firebase/database'
export const registerUser = async (userId: string) => {
  //save to realtime database
  set(ref(rtdb, '/users'), userId, 
}
