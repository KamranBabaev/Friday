import styles from './SuperButton.module.css'

type SuperButtonPropsType = {
  title: string
  disabled: boolean
}


export function SuperButton(props: SuperButtonPropsType) {

  return (
      <div>
        <button className={props.disabled
            ? styles.btnDisabled
            : styles.btn}>
          {props.title}
        </button>
      </div>
  )
}