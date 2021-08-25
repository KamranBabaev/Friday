import styles from './CheckEmail.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import checkEmail from '../common/icons/checkEmail.png'


export const CheckEmail = () => {
  return (
      <div className={stylesContainer.container}>
        <div className={stylesContainer.titleApp}>
          <h1>Brain storm</h1>
          <img src={checkEmail} width={170} alt=''/>
          <h2>Check email</h2>
        </div>
        <h4 className={styles.checkEmailTitle}>We’ve sent an instructions to your Email, please follow it to continue.</h4>
      </div>
  )
}