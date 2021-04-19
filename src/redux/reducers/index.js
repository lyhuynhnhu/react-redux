import { combineReducers } from 'redux'
import otpSubmit from './registration'
import phoneSubmit from './registration'

export default combineReducers({
    phone: phoneSubmit,
    otp: otpSubmit,
})