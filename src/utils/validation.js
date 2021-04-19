export const validateRequired = (value) => !!value;
export const validateCheckBox = (value) => !!value;

export const validateSelectBox = (value) => value !== "";

export const validatePhone = (value) => {
    const phoneRegex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/
    return phoneRegex.test(value);
}

export const validateOTPCol = (value) => {
    const otpRegex = /^[0-0]?[0-9]$/
    console.log(otpRegex.test(value))
    return otpRegex.test(value)
}

export const validationRules = {
    required: [
        {
            validator: validateRequired,
            message: 'This field is required'
        }
    ],
    selectBox: [
        {
            validator: validateSelectBox,
            message: 'You must select an option'
        }
    ],
    phone: [
        {
            validator: validateRequired,
            message: 'This field is required'
        },
        {
            validator: validatePhone,
            message: 'Phone number must be 10 digits'
        },
    ],
    checkBox: [
        {
            validator: validateCheckBox,
            message: 'You must agree with us terms'
        }
    ],
    otpCol: [
        {
            validator: validateOTPCol,
            message: 'You must enter 4 digits into each input field'
        }
    ]
}

export const validateByRules = (rules) => (values) => {
    const errors = {};
    for(const [key, rule] of Object.entries(rules)) {
        let i;
        for(i = 0; i < rule.length; i++) {
            if(!rule[i].validator(values[key])) {
                errors[key] = rule[i].message;
                break;
            }
        }
    }
    return errors;
}