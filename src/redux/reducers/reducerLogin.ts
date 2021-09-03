import {LoginAPI} from "../../API/loginAPI";
import {setInitializedAC, setInitializedAT} from './reducerApp';
import {Dispatch} from 'redux';

const initState = {
  authMe: false,
  entityStatus: false
}

export const reducerLogin = (state: any = initState, action: actionType) => {
  switch (action.type) {
    case 'LOGIN_AUTH_ME':
      return {...state, authMe: action.authMe}
    case 'ENTITY-STATUS':
      return {...state, entityStatus: true}
    default:
      return state
  }
}

export const loginAC = (authMe: boolean) => ({
  type: 'LOGIN_AUTH_ME',
  authMe
} as const)

export const entityStatusAC = () => ({
  type: 'ENTITY-STATUS',
} as const)


export const loginTC = (email: string, password: string, checked: boolean) => async (dispatch: any) => {
  dispatch(entityStatusAC())
  try {
    dispatch(setInitializedAC(true))
    await LoginAPI.authMe(email, password, checked)
    dispatch(loginAC(true))
    dispatch(setInitializedAC(false))
  } catch (e) {
    dispatch(setInitializedAC(false))
    const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
    alert(error)
  }
}

export const Logout = () => async (dispatch: ThunkDispatch) => {
  try {
    await LoginAPI.logout()
    dispatch(loginAC(false))
    dispatch(entityStatusAC())

  } catch {
    dispatch(loginAC(true))
  }

}

// types
type actionType = loginAT | entityStatusAT
type loginAT = ReturnType<typeof loginAC>
export type entityStatusAT = ReturnType<typeof entityStatusAC>
type ThunkDispatch = Dispatch<actionType | setInitializedAT>