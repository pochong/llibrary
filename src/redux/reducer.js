import * as ActionTypes from './ActionTypes'

export const Reducer = (state = {
    isLoading: true,
    errMess: null,
    text: "there is nothing to speak",
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_TEXT:
            return { ...state, isLoading: false, errMess: null, text: action.payload }

        case ActionTypes.TEXT_LOADING:
            return { ...state, isLoading: true, errMess: null, text: "" }

        case ActionTypes.TEXT_FAILED:
            return { ...this.state, isLoading: false, errMess: action.payload, text: "there is an error" }

        default:
            return state
    }

}

