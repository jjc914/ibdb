import { writable } from 'svelte/store'
import type firebase from 'firebase/app'

export const user = writable(null)
export const isLoggedIn = writable(false)
