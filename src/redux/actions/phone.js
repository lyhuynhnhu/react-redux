import * as types from '../constants/ActionTypes'
import phoneSubmitService from '../services/phone'

export default phone => {
    console.log('phone: ', phone)
    return dispatch => {
        dispatch(phoneSubmit());
        phoneSubmitService(phone)
        .then(phone => dispatch(phoneSubmitSuccess(phone)))
        .catch(error => dispatch(phoneSubmitFailure(error)))
    }
}
const phoneSubmit = () => {
    return {
        type: types.PHONE_SUBMIT,
    }
}
const phoneSubmitSuccess = (phone) => {
    return {
        type: types.PHONE_SUBMIT_SUCCESS,
        payload: phone,
    }
}
const phoneSubmitFailure = (error) => {
    return {
        type: types.PHONE_SUBMIT_FAILURE,
        payload: error
    }
}