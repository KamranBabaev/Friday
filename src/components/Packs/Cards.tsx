import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {useEffect} from 'react';
import {fetchCardsTC} from '../../redux/reducers/reducerCards';
import styles from './packs.module.css'
import {cardsType} from '../../API/cardsAPI';
import {useParams} from 'react-router-dom';

type CardsPropsType = {
    id?: string
}

export const Cards = (props: CardsPropsType) => {
    const cards = useSelector<AppRootStateType, Array<cardsType>>(state => state.cards)
    const dispatch = useDispatch()
    const {id} = useParams<{ id: string }>()
    console.log(id)




    useEffect(() => {
        dispatch(fetchCardsTC(id))
    }, [])

    return (
        <div className={styles.packs}>
            <div>
                <h2>Show packs cards</h2>
                <button>My</button>
                <button>All</button>
                <p>Number of cards</p>
                <p>1-100</p>
            </div>
            <div>
                <h1>Packs list</h1>
                <div style={{margin: '10px'}}>
                    <input/>
                    <button>Add new pack</button>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    border: '1px solid black'
                }}>
                    <div style={{width: '150px'}}>question</div>
                    <div style={{width: '150px'}}>answer</div>
                    <div style={{width: '150px'}}>Grade</div>
                    <div style={{width: '150px'}}>updated</div>

                    <div style={{width: '150px'}}>
                        <button>add</button>
                    </div>

                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    border: '1px solid black',
                    padding: '10px',

                }}>
                    <div style={{width: '150px'}}>
                        {cards.map(c => c._id !== props.id ?
                            <div>{c.question}</div> : <div>'Not cards'</div>)}
                    </div>
                    <div style={{width: '150px'}}>
                        {cards.map(c => c._id !== props.id ?
                            <div>{c.answer}</div> : <div>'Not cards'</div>)}
                    </div>
                    <div style={{width: '150px'}}>
                        {cards.map(c => c._id !== props.id ?
                            <div>{c.grade}</div> : <div>'Not cards'</div>)}
                    </div>
                    <div style={{width: '150px'}}>
                        {cards.map(c => c._id !== props.id ?
                            <div>{c.updated}</div> : <div>'Not cards'</div>)}
                    </div>
                </div>

            </div>
        </div>
    )
}