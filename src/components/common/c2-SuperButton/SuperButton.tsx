import styles from './SuperButton.module.css'




type SuperButtonPropsType = {
    title: string
}


export function SuperButton(props: SuperButtonPropsType) {
    return (
        <div>
            <button  className={styles.btn}>{props.title}</button>
        </div>
    )
}