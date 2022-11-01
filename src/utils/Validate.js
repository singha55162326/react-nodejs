
import * as Constant from './Constant'

const MONEY_PATTERN = /^[,\d]{1,13}$/
const PHONE_PATTERN_MOBILE = /^[+]?(856|0|)(9|5|2|209|309|304|202|303|205|305|302)[\d]{7}$/
const PHONE_PATTERN_UNIPHONE = /^[+]?(856|0|)(309|304|21|305|302)[\d]{6}$/



export function isForMatch(str, pattern) {
    return pattern.test(str)
}
function isValidateMoney(money) {
    return isForMatch(money, MONEY_PATTERN)
}

function isValidatePhonenumber(phoneNumber) {
    var phoneNumber = removeSpecialCharacter(phoneNumber)
    if (isForMatch(phoneNumber, PHONE_PATTERN_MOBILE) || isForMatch(phoneNumber, PHONE_PATTERN_UNIPHONE)) {
        return true
    } else {
        return false
    }
}

function removeSpecialCharacter(inputString) {
    inputString = inputString.replace(' ', '')
    inputString = inputString.replace('(', '')
    inputString = inputString.replace(')', '')
    inputString = inputString.replace('-', '')
    inputString = inputString.replace('+', '')
    inputString = inputString.replace('$', '')
    return inputString
}



export function isValidated(str, validateType) {
    switch (validateType) {
        case Constant.VALIDATE_MONEY:
            return isValidateMoney(str)
        case Constant.VALIDATE_PHONE:
            return isValidatePhonenumber(str)
        default:
            break;
    }
}