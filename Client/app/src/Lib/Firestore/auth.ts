import { app } from '$lib/Firestore/firestoreSetup'
import { getAuth, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'
import { saveUser, getUser } from './db'
const provider = new GoogleAuthProvider()
const auth = getAuth()
export const signIn = () => {
  return signInWithRedirect(auth, provider)
}
export const signOut = () => {
  return auth.signOut()
}

// export function signIn () {
//   await signInWithRedirect(auth, provider);
//   auth.onAuthStateChanged(user => {
//     if (user) {
//       console.log(user)
//     }
//   }, err => {
//     console.log(err)
//   }

// };
