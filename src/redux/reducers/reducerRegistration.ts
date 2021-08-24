import {LoginAPI, RegistrationAPI} from '../../API/loginAPI';

const initState = {
    authoriseMe:false
}

export const reducerRegistration = (state: any = initState, action: actionType) => {
    switch (action.type) {
        case 'REGISTRATION_ME':
            return {...state, authoriseMe: action.authoriseMe}
        default:
            return state
    }
}

export const registrationAC = (authoriseMe: boolean) => ({
    type: 'REGISTRATION_ME',
    authoriseMe
} as const )

export const registrationTC = (email: string, password: string,) => (dispatch: any) => {
    const promise = RegistrationAPI.regMe(email, password)
        .then(()=>dispatch(registrationAC(true)))
        .catch(()=>dispatch(registrationAC(false)))

}

// types
type actionType = registrationAT
type registrationAT = ReturnType<typeof registrationAC>