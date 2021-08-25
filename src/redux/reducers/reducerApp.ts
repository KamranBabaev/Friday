type InitStateType = {
  initialized: boolean
}
type actionType = setInitializedAT
type setInitializedAT = ReturnType<typeof setInitializedAC>

const initState: InitStateType = {
  initialized: false
}

export const appReducer = (state: InitStateType = initState,
                           action: actionType): InitStateType => {

  switch (action.type) {
    case 'SET_INITIALIZED':
      return {
        ...state,
        initialized: true,
      }
    default:
      return state
  }
}

export const setInitializedAC = () => ({type: 'SET_INITIALIZED'} as const);