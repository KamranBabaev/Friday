import styles from './SuperButton.module.css'

type SuperButtonPropsType = {
  title: string
  onClickHandler?: () => void
  disabledBtn: boolean
}


export function SuperButton(props: SuperButtonPropsType) {

  return (
      <div>
        <button disabled={props.disabledBtn}
                onClick={props.onClickHandler}
                className={props.disabledBtn
                    ? styles.btnDisabled
                    : styles.btn}>
          {props.title}
        </button>
      </div>
  )
}