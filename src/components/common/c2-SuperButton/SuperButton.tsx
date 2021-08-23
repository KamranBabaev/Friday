import styles from './SuperButton.module.css'

type SuperButtonPropsType = {
  title: string
  disabled: boolean
  onClickHandler?: () => void
}


export function SuperButton(props: SuperButtonPropsType) {

  return (
      <div>
        <button onClick={props.onClickHandler}
                className={props.disabled
                    ? styles.btnDisabled
                    : styles.btn}>
          {props.title}
        </button>
      </div>
  )
}