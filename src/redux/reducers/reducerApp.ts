export const appReducer = (state: InitStateType = initState,
                           action: actionType): InitStateType => {

  switch (action.type) {
    case 'SET_INITIALIZED':
      return {
        ...state,
        initialized: action.initialized,
      }
    default:
      return state
  }
}

export const setInitializedAC = (initialized: boolean) => ({
  type: 'SET_INITIALIZED',
  initialized
} as const);

//type

type InitStateType = {
  initialized: boolean
}
type actionType = setInitializedAT
export type setInitializedAT = ReturnType<typeof setInitializedAC>

const initState: InitStateType = {
  initialized: false
}
