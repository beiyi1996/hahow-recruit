import { createContext } from 'react'

export const ContextStore = createContext()

export const APIErrorInitState = { code: 0, message: '' }

export function APIErrorReducer(state, action) {
  switch (action.type) {
    case 'SET_SUCCESS':
      return { code: 200, message: action.payload?.message }
    case 'SET_ERROR':
      return { code: action.payload?.code, message: action.payload.message }
    default:
      return state
  }
}
