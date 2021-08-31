import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://neko-back.herokuapp.com/2.0',
  withCredentials: true
})


export const PacksAPI = {
  async getPacks() {
    return await instance.get<PacksDataType>('/cards/pack?pageCount=14')
  }
}


// types
export type PacksDataType =   {
  cardPacks: Array<CardType>
  cardPacksTotalCount: number
  maxCardsCount: number
  minCardsCount: number
  page: number
  pageCount: number
  token: string
  tokenDeathTime: number
}

export type CardType = {
  cardsCount: number
  created: string
  deckCover: any
  grade: number
  more_id: string
  name: string
  path: string
  private: boolean
  rating: number
  shots: number
  type: string
  updated: string
  user_id: string
  user_name: string
  __v: number
  _id: string

}

