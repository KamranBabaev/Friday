import {loginAC} from "./reducerLogin";
import {CardsAPI} from "../../API/cardsAPI";

type InitStateType = Array<any>
type actionType = setCardsAT


const initState: InitStateType = []

export const reducerPacks = (state: InitStateType = initState,
                             action: actionType): InitStateType => {

  switch (action.type) {
    case "SET-CARDS":
      return action.cards.map(card => ({...card}))
    default:
      return state
  }
}

export const setCardsAC = (cards: CardsType[]) => ({
  type: 'SET-CARDS',
  cards
} as const)


export const fetchCardsTC = () => async (dispatch: any) => {
  try {
    debugger
    const res = await CardsAPI.getPacks()
    dispatch(setCardsAC(res.data.cardPacks))
  } catch {
    dispatch(loginAC(true))
  }
}

//types
type CardsType = any
export type setCardsAT = ReturnType<typeof setCardsAC>
