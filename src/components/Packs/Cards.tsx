import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {useEffect} from 'react';
import {fetchCardsTC} from '../../redux/reducers/reducerCards';
import styles from './packs.module.css'

//11
export const Cards = () => {
    const cards = useSelector<AppRootStateType, string>(state => state.cards)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchCardsTC('612c9b759f1a7900041d6f25'))
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
                <div>
                    <input/>
                    <button>Add new pack</button>
                </div>
                <div>{cards}</div>
            </div>
        </div>
    )
}