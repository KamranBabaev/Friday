import styles from "./ShowPacksCards.module.css"
import {RangeComponent} from "../Packs/RangeSlider/RangeSlider";
import {useState, MouseEvent} from "react";

export function ShowPacksCards() {

  const [activeBtn1, setActiveBtn1] = useState(true)
  const [activeBtn2, setActiveBtn2] = useState(false)

  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setActiveBtn1(!activeBtn1)
    setActiveBtn2(!activeBtn2)
  }

  return (
      <div className={styles.mainBlock}>
        <div>Show packs cards</div>
        <div className={styles.buttons}>
          <button onClick={onClickHandler}
                  className={activeBtn1
                      ? styles.btn + " " + styles.activeBtn
                      : styles.btn}>my
          </button>
          <button onClick={onClickHandler}
                  className={activeBtn2
                      ? styles.btn + " " + styles.activeBtn
                      : styles.btn}>all
          </button>
        </div>
        <div className={styles.rangeBlock}>
          <div className={styles.sliderBlock}>
            <RangeComponent/>
          </div>
        </div>
      </div>
  )
}