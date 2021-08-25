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
import {Preloader} from "../common/preloader/Preloader";
import {validateEmail} from "../common/validation/emailValidation";


export const Login = () => {

    const dispatch = useDispatch()
    const authMe = useSelector<AppRootStateType, boolean>(state => state.login.authMe)
    const [initialized, setInitialized] = useState(false)
    const [openPassword, setOpenPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checked, setChecked] = useState(false)
    const [disabledBtn, setDisabledBtn] = useState(true)

    const changeViewPassword = () => {
        setOpenPassword(!openPassword)
    }

    const emailTarget = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const passwordTarget = (e: ChangeEvent<HTMLInputElement>) => {
        if (validateEmail(email) && (e.currentTarget.value.length > 7)) {
            setDisabledBtn(false)
        } else {
            setDisabledBtn(true)
        }
        setPassword(e.currentTarget.value)
    }

    const loginHandler = () => {
        setInitialized(true)
        setTimeout(() => dispatch(loginTC(email, password, checked)), 1000)
        setEmail('')
        setPassword('')
        setChecked(false)
    }

    if (authMe) {
        return <Redirect to={'/'}/>
    }


    return (
        <div className={stylesContainer.container}>
            <div className={stylesContainer.titleApp}>
                <h1>Brain storm</h1>
                <h2>Sign in</h2>
            </div>
            {initialized && <Preloader/>}
            <form className={stylesContainer.form}>
                <div className={stylesContainer.item}>
                    <p>Email:</p>
                    <div className={stylesContainer.inputBlock}>
                        <input onChange={emailTarget}
                               value={email}
                               type="text"
                               placeholder="example@ddd.com"/>
                    </div>
                    {(email && (!validateEmail(email))) ?
                        <div className={styles.errorMessage}>incorrect
                            email!!!</div> : <></>}
                    {(email && (validateEmail(email))) ?
                        <div className={styles.correctMessage}>correct
                            email</div> : <></>}
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
                    {(password) && (password.length < 8) ?
                        <div className={styles.errorMessage}>password should be more
                            than 7 symbols!!!</div> : <></>}
                    {(password) && (password.length > 7) ?
                        <div className={styles.correctMessage}>correct
                            password</div> : <></>}

                </div>
                <div className={styles.rememberMe}>
                    <input onClick={() => setChecked(!checked)}
                           className={styles.checkbox}
                           type="checkbox"/>
                    <span>remember me</span>
                </div>
                <SuperButton
                    disabledBtn={disabledBtn}
                    title="Login"
                    onClickHandler={loginHandler}/>
            </form>
        </div>
    )
}