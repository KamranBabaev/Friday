import {Dispatch} from 'redux';
import {PackAPI} from '../../API/PackAPI';

const initState: InitialStateType = []


export const packReducer = (state: InitialStateType = initState, action: ActionsType) => {
    switch (action.type) {
        case 'SET_CARDS':
            return {...state}
        default:
            return state
    }
}

const setCardsAC = (id: string) => ({type: 'SET_CARDS', id} as const)


export const fetchCardsTC = (id:string) => async (dispatch: ThunkDispatch) => {
debugger
        PackAPI.getPack(id)
           .then(()=>dispatch(setCardsAC(id)))


}

type ThunkDispatch = Dispatch<ActionsType>
type InitialStateType = any
type ActionsType = ReturnType<typeof setCardsAC>