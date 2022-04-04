import { rtdb } from './firestoreSetup'
import { ref, set } from 'firebase/database'

export const registerUser = async (userId: string) => {
  //save to realtime database
  set(ref(rtdb, 'users/' + userId), {
    id: userId,
    name: '',
    email: '',
    photoURL: '',
    createdAt: new Date().toISOString(),
  })
}

export const updateUser = async (userId: string, user: any) => {
  //save to realtime database
  set(ref(rtdb, 'users/' + userId), user)
}

export const getUser = async (userId: string) => {
  return ref(rtdb, 'users/' + userId)
}

export const deleteUser = async (userId: string) => {
  //save to realtime database
  set(ref(rtdb, 'users/' + userId), null)
}
