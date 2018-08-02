import { DO_MATH } from './types'

export const doMath = (result) => ({
    type: DO_MATH,
    payload: result
})