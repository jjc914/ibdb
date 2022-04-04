import { rtdb } from './firestoreSetup'
import { ref, set } from 'firebase/database'

export const getRandomPhysicsQuestion = async (): Promise<any> => {
  const question: string[] = await ref(rtdb, 'questions/physics')
  console.log('getRandomPhysicsQuestion', question)
  const randomIndex = Math.floor(Math.random() * question.length)
  return question[randomIndex]
}

export const getRandomMathQuestion = async (): Promise<any> => {
  const question: string[] = await ref(rtdb, 'questions/math')
  console.log('getRandomMathQuestion', question)
  const randomIndex = Math.floor(Math.random() * question.length)
  return question[randomIndex]
}
