const isNameValid = (phone) => {
    return String(phone)
        .match(
        /^[A-Za-z ]+$/
        );
};

const isPhoneValid = (phone) => {
    return String(phone)
        .match(
        /^(\d{1}\+) ?\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
        );
};

const isEmailValid = (email) => {
    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validators = {
    name: isNameValid, 
    phone: isPhoneValid, 
    email: isEmailValid
}

const validateStringValue = (key, value) => {
    return validators[key](value);
}

const capitalize = (str) => {    
    const firstLetter = str.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = str.slice(1)
    
    return firstLetterCap + remainingLetters
}

const validateStepStateString = (key, value, errorState) => {
    const errorStateCopy = JSON.parse(JSON.stringify(errorState));
    if (value.length === 0) {
        errorStateCopy[key] = `${capitalize(key)} cannot be blank.`;
        return errorStateCopy;
    }
    const isValid = validateStringValue(key, value);
    if (!isValid) {
        errorStateCopy[key] = `${capitalize(key)} is invalid.`;
    } else {
        errorStateCopy[key] = null;
    }
    return errorStateCopy;
}

export default validateStepStateString;

