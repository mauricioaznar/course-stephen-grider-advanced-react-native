import {
    FACEBOOK_LOGIN_FAIL,
    FACEBOOK_LOGIN_SUCCESS
} from "../actions/types";

export default function auth (state = { token: null }, action) {
    switch(action.type) {
        case FACEBOOK_LOGIN_SUCCESS:
            return {
                token: action.payload
            }
        case FACEBOOK_LOGIN_FAIL:
            return { token: null }
        default:
            return state
    }
}