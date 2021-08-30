import './App.css';
import {Route, Switch} from 'react-router-dom';
import {Login} from './components/StartComponents/Login/Login';
import {Profile} from './components/Profile/Profile';
import {Registration} from './components/StartComponents/Registration/Registration';
import {TestPage} from './components/TestPage/TestPage';
import {InputPassword} from './components/StartComponents/InputPassword/InputPassword';
import {Error404} from './components/Error404/Error404';
import {Header} from './components/Header/Header';
import {RestorePassword} from './components/StartComponents/RestorePassword/RestorePassword';
import {InputEmailForRestorePass} from './components/StartComponents/InputEmailForRestorePass/InputEmailForRestorePass';
import {CheckEmail} from './components/StartComponents/CheckEmail/CheckEmail';
import {Cards} from './components/Packs/Cards';
import {Packs} from './components/PacksComponents/Packs/Packs';

function App() {

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path={routes.profile}
                       render={() => <Profile/>}/>
                <Route exact path={routes.packs}
                       render={() => <Packs/>}/>
                <Route exact path={routes.cards}
                       render={() => <Cards/>}/>
                <Route path={routes.login}
                       render={() => <Login/>}/>
                <Route path={routes.registration}
                       render={() => <Registration/>}/>
                <Route path={routes.test}
                       render={() => <TestPage/>}/>
                <Route path={routes.checkEmail}
                       render={() => <CheckEmail/>}/>
                <Route path={routes.inputPassword}
                       render={() => <InputPassword/>}/>
                <Route path={routes.inputEmailForRestorePass}
                       render={() => <InputEmailForRestorePass/>}/>
                <Route path={`${routes.restorePassword}/:token`}
                       render={() => <RestorePassword/>}/>
                <Route path={routes.error404}
                       render={() => <Error404/>}/>
            </Switch>

        </div>
    );
}


export const routes = {
    profile: '/',
    packs: '/packs',
    cards: '/cards',
    login: '/login',
    registration: '/registration',
    test: '/testpage',
    checkEmail: '/checkemail',
    inputPassword: '/inputpassword',
    inputEmailForRestorePass: '/inputemail',
    restorePassword: `/restorpassword`,
    error404: '*'
}

export default App;
