import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPacksTC} from '../../../redux/reducers/reducerPacks';
import {AppRootStateType} from '../../../redux/store';
import {PacksItem} from './PacksItem/PacksItem';
import {CardType} from '../../../API/packsAPI';
import styles from './PacksList.module.css'
import {fetchCardsTC} from '../../../redux/reducers/reducerCards';

export function PacksList() {
    const dispatch = useDispatch()
    const packs = useSelector<AppRootStateType, Array<CardType>>(state => state.packs)
    const cards = useSelector<AppRootStateType, Array<any>>(state => state.cards)


    useEffect(() => {
        dispatch(fetchPacksTC())
    }, [])

    const giveCard = (id: string) => {
        dispatch(fetchCardsTC(id))
        const newCard = cards.map(c => c.id === id)
        return newCard
    }

debugger
    return (
        <div className={styles.mainBlock}>
            <header className={styles.headerPacksList}>
                <div className={styles.name}>Name</div>
                <div className={styles.cards}>Cards</div>
                <div className={styles.lastUpdate}>Last updated</div>
                <div className={styles.actions}>Actions</div>
            </header>
            <div>
                {
                    packs
                        .map(pack =>
                            <PacksItem
                                id={pack._id}
                                name={pack.name}
                                cards={pack.cardsCount}
                                lastUpdate={pack.updated}
                                giveCard={giveCard}
                            />)
                }
            </div>
        </div>
    )
}