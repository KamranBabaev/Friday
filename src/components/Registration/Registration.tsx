import {SuperButton} from '../common/c2-SuperButton/SuperButton';
import styles from './Registration.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import eye from '../common/icons/eye.png'
import closedEye from '../common/icons/closedEye.png'
import {ChangeEvent, useState} from 'react';
import {loginTC} from '../../redux/reducers/reducerLogin';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {registrationTC} from '../../redux/reducers/reducerRegistration';
import {Redirect} from 'react-router-dom';

export const Registration = () => {
    const dispatch = useDispatch()
    const authoriseMe = useSelector<AppRootStateType, boolean>(state => state.registration.authoriseMe)

    const [openPassword, setOpenPassword] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')


    const emailTarget = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const passwordTarget = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const passwordConfirmTarget = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirm(e.currentTarget.value)
    }

    const changeViewPassword = () => {
        setOpenPassword(!openPassword)
    }

    const registerHandler = () => {
        if (password === passwordConfirm) {
            dispatch(registrationTC(email, password))
            setEmail('')
            setPassword('')
            setPasswordConfirm('')
        }else{
            alert('Парли не совпадают.')
        }

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

            <form className={stylesContainer.form}>
                <div className={stylesContainer.item}>
                    <p>Email:</p>
                    <div className={stylesContainer.inputBlock}>

                        <input
                            onChange={emailTarget}
                            value={email}
                            type="text"
                            placeholder="example@ddd.com"/>

                    </div>
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
                </div>

                <div className={styles.buttons}>
                    <SuperButton disabledBtn={false} title="Cancel"/>
                    <SuperButton
                        onClickHandler={registerHandler}
                        disabledBtn={false} title="Register"/>
                </div>
            </form>
        </div>
    )
}