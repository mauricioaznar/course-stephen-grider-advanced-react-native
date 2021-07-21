import {AsyncStorage} from "react-native";
import {FACEBOOK_LOGIN_SUCCESS} from "./types";

export const facebookLogin = () => async (dispatch) => {
    const token = await AsyncStorage.getItem('fb_token')
    if (token) {
        // dispatch an action saying fb login is done
        dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token})
    } else {
        const result = await doFacebookLogin(dispatch)
        console.log(result)
    }
}

const doFacebookLogin = async (dispatch) => {
    const token = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('thisisatoken')
        }, 2000)
    })
    await AsyncStorage.setItem('fb_token', token)
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token})
}
