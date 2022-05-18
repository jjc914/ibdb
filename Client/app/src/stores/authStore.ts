import { writable } from 'svelte/store'

export const user = writable(null)
export const isLoggedIn = writable(false)
export const correct = writable(0)
export const wrong = writable(0)