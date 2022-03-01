import { v4 as uuidv4 } from 'uuid'
import { rtdb } from './firestoreSetup'
import { ref, set } from 'firebase/database'
export const registerUser = async (userId: string) => {
  //save to realtime database
  set(ref(rtdb, '/users'), userId, 
}


export const getUser = async (userId: string) => {
  return ref(rtdb, '/users/' + userId)
}

export const saveUser = async (userId: string, user: any) => {
  set(ref(rtdb, '/users/' + userId), user)
}

export const getUserList = async () => {
  return ref(rtdb, '/users')
}

export const getPhysicsList = async () => {
  return ref(rtdb, '/physics')
}

export const getMathList = async () => {
  return ref(rtdb, '/math')
}

