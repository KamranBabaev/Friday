import styles from './SuperButton.module.css'

type SuperButtonPropsType = {
  title: string
  disabled: boolean
  loginHandler?: () => void
}


export function SuperButton(props: SuperButtonPropsType) {

  return (
      <div>
        <button onClick={props.loginHandler}
                className={props.disabled
                    ? styles.btnDisabled
                    : styles.btn}>
          {props.title}
        </button>
      </div>
  )
}