import * as types from '../constants/ActionTypes'
import otpSubmitService from '../services/otp'

export default otp => {
    console.log('otp: ', otp)
    return dispatch => {
        dispatch(otpSubmit());
        otpSubmitService(otp)
        .then(otp => dispatch(otpSubmitSuccess(otp)))
        .catch(error => dispatch(otpSubmitFailure(error)))
    }
}

const otpSubmit = () => {
    return {
        type: types.OTP_SUBMIT,
    }
}
const otpSubmitSuccess = (otp) => {
    return {
        type: types.OTP_SUBMIT_SUCCESS,
        payload: otp,
    }
}
const otpSubmitFailure = (error) => {
    return {
        type: types.OTP_SUBMIT_FAILURE,
        payload: error,
    }
}