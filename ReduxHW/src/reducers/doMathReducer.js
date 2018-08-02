import { DO_MATH } from '../actions/types'

export default function(state= 0, action) {
    switch (action.type) {
        case DO_MATH:
            console.log(action.payload)
            return action.payload
        default:
            return state
    }
}