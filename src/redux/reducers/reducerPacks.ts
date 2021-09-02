import {PacksAPI} from '../../API/packsAPI';
import {Dispatch} from 'redux';

type InitStateType = Array<any>
type actionType = setCardsAT


const initState: InitStateType = []

export const reducerPacks = (state: InitStateType = initState,
                             action: actionType): InitStateType => {

    switch (action.type) {
        case 'SET-CARDS':
            return action.cards.map(card => ({...card}))
        case 'REMOVE-CARDS':
            return action.cards.map(card => ({...card}))
        default:
            return state
    }
}

export const setCardsAC = (cards: CardsType[]) => ({
    type: 'SET-CARDS',
    cards
} as const)
export const removeCardsAC = (cards: CardsType[]) => ({
    type: 'REMOVE-CARDS',
    cards
} as const)


export const fetchPacksTC = (pageCount: number) => async (dispatch: ThunkDispatch) => {
    try {
        const res = await PacksAPI.getPacks(pageCount)
        dispatch(setCardsAC(res.data.cardPacks))
    } catch (error) {
        alert(error)
    }
}


export const removeCard = (pageCount: number) => async (dispatch: ThunkDispatch) => {
    try {
        const res = await PacksAPI.getPacks(pageCount)
        dispatch(setCardsAC(res.data.cardPacks))
    } catch (error) {
        alert(error)
    }
}

//types
type CardsType = any
export type setCardsAT =
    ReturnType<typeof setCardsAC>
    | ReturnType<typeof removeCardsAC>
type ThunkDispatch = Dispatch<actionType>