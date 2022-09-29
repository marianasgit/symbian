export const isEmpty = ( val : any) => {
    return val === undefined || val === null || val === ''
}

export const isEmail = (val : any) => {
    return new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}').test(val);
}

export const isPhoneNumber = (val : any) => /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/.test(val)