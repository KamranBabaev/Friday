import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPacksTC} from '../../../redux/reducers/reducerPacks';
import {AppRootStateType} from '../../../redux/store';
import {PacksItem} from './PacksItem/PacksItem';
import {CardType} from '../../../API/packsAPI';
import styles from './PacksList.module.css'

// types
type PacksListPropsType = {
  pageCount: number
}

export function PacksList(props: PacksListPropsType) {
  const dispatch = useDispatch()
  const packs = useSelector<AppRootStateType, Array<CardType>>(state => state.packs)


  useEffect(() => {
    dispatch(fetchPacksTC(props.pageCount))
  }, [])

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
                        key={pack._id}
                        id={pack._id}
                        name={pack.name}
                        cards={pack.cardsCount}
                        lastUpdate={pack.updated}
                    />)
          }
        </div>
      </div>
  )
}