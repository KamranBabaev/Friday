import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {useEffect, useState} from 'react';
import {fetchCardsTC} from '../../redux/reducers/reducerCards';
import styles from './Cards.module.css'

import {Redirect, useParams} from 'react-router-dom';
import {cardsType} from '../../API/cardsAPI';
import {routes} from '../../App';

type CardsPropsType = {
    id?: string
}

export const Cards = (props: CardsPropsType) => {
    const cards = useSelector<AppRootStateType, Array<cardsType>>(state => state.cards)
    const dispatch = useDispatch()
    const {id} = useParams<{ id: string }>()

    const [back, setBack] = useState(false)

    function backToPacks() {
        setBack(true)
    }

    const deleteCard = () => {

    }
    const editCard = () => {

    }

    useEffect(() => {
        dispatch(fetchCardsTC(id))
    }, [])

    if (back) {
        return <Redirect to={routes.packs}/>
    }
    return (
        <div className={styles.packs}>

            <div  className={styles.header}>
                <button onClick={backToPacks}>back</button>
                <div>Packs list</div>
            </div>

            <input className={styles.inpCard} type="text"
                   placeholder="Search..."/>

            <table className={styles.table}>
                <tr>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Grade</th>
                    <th>Updated</th>
                    <th>Actions</th>
                </tr>
                {
                    cards.map(c => c._id !== props.id && <tr>
                        <td>{c.question}</td>
                        <td>{c.answer}</td>
                        <td>{c.grade}</td>
                        <td>{c.updated}</td>
                        <td>
                            <button onClick={deleteCard}>Delete</button>
                            <button onClick={editCard}>Edit</button>
                        </td>
                    </tr>)
                }
            </table>

        </div>
    )
}