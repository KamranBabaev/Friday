import {Dispatch} from 'redux';
import {CardsAPI, cardsType} from '../../API/cardsAPI';

const initState: InitialStateType = []


export const reducerCards = (state: InitialStateType = initState, action: ActionsType) => {
    switch (action.type) {
        case 'SET_CARDS':
            return action.cards.map(c => ({...c}))
        default:
            return state
    }
}

const setCardsAC = (cards: Array<cardsType>) => ({type: 'SET_CARDS', cards} as const)


export const fetchCardsTC = (id: string) => async (dispatch: ThunkDispatch) => {
    try {
        const res = await CardsAPI.getCards(id)
        dispatch(setCardsAC(res.data.cards))
    } catch (err) {
        console.log(err)
    }
}

type ThunkDispatch = Dispatch<ActionsType>
type InitialStateType = Array<cardsType>
type ActionsType = ReturnType<typeof setCardsAC>