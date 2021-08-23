import styles from './Login.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import {ChangeEvent, useState} from "react";
import eye from "../common/icons/eye.png";
import closedEye from "../common/icons/closedEye.png";
import {SuperButton} from '../common/c2-SuperButton/SuperButton';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {loginTC} from "../../redux/reducers/reducerLogin";
import {Redirect} from "react-router-dom";

export const Login = () => {

  const dispatch = useDispatch()
  const authMe = useSelector<AppRootStateType, boolean>(state => state.login.authMe)

  const [openPassword, setOpenPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = useState(false)

  const changeViewPassword = () => {
    setOpenPassword(!openPassword)
  }

  const emailTarget = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }

  const passwordTarget = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }
  const loginHandler = () => {
    dispatch(loginTC(email, password, checked))
    setEmail('')
    setPassword('')
    setChecked(false)
  }

  if (authMe) {
    return <Redirect to={'/profile'}/>
  }

  return (
      <div className={stylesContainer.container}>

        <div className={stylesContainer.titleApp}>
          <h1>Brain storm</h1>
          <h2>Sign in</h2>
        </div>

        <form className={stylesContainer.form}>
          <div className={stylesContainer.item}>
            <p>Email:</p>
            <div className={stylesContainer.inputBlock}>
              <input onChange={emailTarget}
                     value={email}
                     type="text"
                     placeholder="example@ddd.com"/>
            </div>
          </div>
          <div className={stylesContainer.item}>
            <p>Password:</p>
            <div className={stylesContainer.inputBlock}>
              <input onChange={passwordTarget}
                     value={password}
                     type={openPassword ? "text" : "password"}
                     placeholder="****"/>
              <img onClick={changeViewPassword} alt=''
                   src={openPassword ? eye : closedEye}/>
            </div>
          </div>
          <div className={styles.rememberMe}>
            <input onClick={() => setChecked(!checked)}
                   className={styles.checkbox}
                   type="checkbox"/>
            <span>remember me</span>
          </div>
          <SuperButton disabled={false}
                       title="Login"
                       onClickHandler={loginHandler}/>
        </form>
      </div>
  )
}