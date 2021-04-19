import {combineReducers} from 'redux'
import {PHONE_SUBMIT, OTP_SUBMIT, PHONE_SUBMIT_SUCCESS, PHONE_SUBMIT_FAILURE, 
        OTP_SUBMIT_SUCCESS, OTP_SUBMIT_FAILURE} from '../constants/ActionTypes'

const initialState = {
    phone: '',
    otp: '',
    loading: false,
    error: null,
    redirectTo: '',
}

const phoneSubmit = (state = initialState, action) => {
    switch (action.type) {
        case PHONE_SUBMIT:
            return {
                ...state,
                loading: true,
                phone: action.payload,
                otp: null,
                error: null,
                redirectTo: ''
            }
        case PHONE_SUBMIT_SUCCESS:
            return {
                ...state,
                loading: false,
                phone: action.payload,
                otp: null,
                error: null,
                redirectTo: '/registration/otp-registration'
            }
        case PHONE_SUBMIT_FAILURE:
            return {
                ...state,
                loading: false,
                phone: null,
                otp: null,
                error: action.payload,
            }
        default: 
            return {
                ...state,
                phone: action.payload,
                phone_error: 'Error occurred'
            }
    }
}
const otpSubmit = (state = initialState, action) => {
    switch (action.type) {
        case OTP_SUBMIT:
            return {
                ...state,
                otp: action.payload,
                error: '',
            }
        case OTP_SUBMIT_SUCCESS:
            return {
                ...state,
                otp: action.payload,
                redirectTo: '/registration/profile-upload'
            }
        case OTP_SUBMIT_FAILURE: 
        return {
            ...state,
            otp: '',
            error: action.payload
        }
        default: 
            return {
                ...state,
            }
    }
}

export default combineReducers({
    phoneSubmit,
    otpSubmit
})