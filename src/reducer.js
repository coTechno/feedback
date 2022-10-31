
import {
    ADD_ONE_TO_CART_COUNT,
    ADD_ONE_TO_LIKE
} from './action'

const initialState = {
    cartCount: 0,
    likeCount: 0
}

function reducer(state = initialState, action){
    switch(action.type){
        case ADD_ONE_TO_CART_COUNT:
            return {
                ...state,
                cartCount: state.cartCount + 1,
            }
        case ADD_ONE_TO_LIKE:
            return {
                ...state,
                likeCount: state.likeCount + 1
            }
        default:
            return state
    }
}

export default reducer