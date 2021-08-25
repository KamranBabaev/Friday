import {SuperButton} from '../common/c2-SuperButton/SuperButton';
import styles from './Registration.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import eye from '../common/icons/eye.png'
import closedEye from '../common/icons/closedEye.png'
import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {registrationTC} from '../../redux/reducers/reducerRegistration';
import {Redirect} from 'react-router-dom';
import {Preloader} from "../common/preloader/Preloader";
import {validateEmail} from "../common/validation/emailValidation";

export const Registration = () => {
    const dispatch = useDispatch()
    const authoriseMe = useSelector<AppRootStateType, boolean>(state => state.registration.authoriseMe)
    const [openPassword, setOpenPassword] = useState(false)
    const [initialized, setInitialized] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [disabledBtn, setDisabledBtn] = useState(true)


    const emailTarget = (e: ChangeEvent<HTMLInputElement>) => {
        (validateEmail(e.currentTarget.value) && (password.length > 7) && (passwordConfirm === password))
            ? setDisabledBtn(false)
            : setDisabledBtn(true)

        setEmail(e.currentTarget.value)
    }

    const passwordTarget = (e: ChangeEvent<HTMLInputElement>) => {
        (validateEmail(email) && (e.currentTarget.value.length > 7) && (passwordConfirm === e.currentTarget.value))
            ? setDisabledBtn(false)
            : setDisabledBtn(true)

        setPassword(e.currentTarget.value)
    }
    const passwordConfirmTarget = (e: ChangeEvent<HTMLInputElement>) => {
        (validateEmail(email) && (e.currentTarget.value.length > 7) && (password === e.currentTarget.value))
            ? setDisabledBtn(false)
            : setDisabledBtn(true)

        setPasswordConfirm(e.currentTarget.value)
    }

    const changeViewPassword = () => {
        setOpenPassword(!openPassword)
    }

    const registerHandler = () => {
        setInitialized(true)
        if (password === passwordConfirm) {
            setTimeout(() => dispatch(registrationTC(email, password)), 1000)
            setEmail('')
            setPassword('')
            setPasswordConfirm('')
        } else {
            alert('Парли не совпадают.')
        }

    }

    const clearAllInputs = () => {
        setEmail("")
        setPassword("")
        setPasswordConfirm("")
    }


    if (authoriseMe) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={stylesContainer.container}>

            <div className={stylesContainer.titleApp}>
                <h1>Brain storm</h1>
                <h2>Sign up</h2>
            </div>
            {initialized && <Preloader/>}
            <form className={stylesContainer.form}>
                <div className={stylesContainer.item}>
                    <p>Email:</p>
                    <div className={stylesContainer.inputBlock}>
                        <input
                            onChange={emailTarget}
                            value={email}
                            type="text"
                            placeholder="example@ddd.com"
                            autoFocus/>
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
                        <input
                            onChange={passwordTarget}
                            value={password}
                            type={openPassword ? 'text' : 'password'}
                            placeholder="****"/>
                        <img onClick={changeViewPassword} alt=""
                             src={openPassword ? eye : closedEye}/>
                    </div>
                    {(password) && (password.length < 8) ?
                        <div className={styles.errorMessage}>password should be more
                            than 7 symbols!!!</div> : <></>}
                    {(password) && (password.length > 7) ?
                        <div className={styles.correctMessage}>correct
                            password</div> : <></>}
                </div>
                <div className={stylesContainer.item}>
                    <p>Confirm password:</p>
                    <div className={stylesContainer.inputBlock}>
                        <input
                            onChange={passwordConfirmTarget}
                            value={passwordConfirm}
                            type={openPassword ? 'text' : 'password'}
                            placeholder="****"/>
                        <img onClick={changeViewPassword} alt=""
                             src={openPassword ? eye : closedEye}/>
                    </div>
                    {(password) && (passwordConfirm) && (password !== passwordConfirm) ?
                        <div className={styles.errorMessage}>passwords do not match</div> : <></>}
                    {(password) && (password === passwordConfirm) ?
                        <div className={styles.correctMessage}>correct
                            password</div> : <></>}
                </div>

                <div className={styles.buttons}>
                    <SuperButton onClickHandler={clearAllInputs} title="Cancel"/>
                    <SuperButton
                        onClickHandler={registerHandler}
                        disabledBtn={disabledBtn} title="Register"/>
                </div>
            </form>
        </div>
    )
}