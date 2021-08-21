import './App.css';
import {Route, Switch} from 'react-router-dom';
import {Login} from './components/Login/Login';
import {Profile} from './components/Profile/Profile';
import {Registration} from './components/Registration/Registration';
import {TestPage} from './components/TestPage/TestPage';
import {InputPassword} from './components/InputPassword/InputPassword';
import {Error404} from './components/Error404/Error404';
import {Header} from "./components/Header/Header";
import {RestorePassword} from './components/RestorePassword/RestorePassword';


//rad
function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path={'/login'}
                       render={() => <Login/>}/>
                <Route path={'/profile'}
                       render={() => <Profile/>}/>
                <Route path={'/registration'}
                       render={() => <Registration/>}/>
                <Route path={'/restorpassword'}
                       render={() => <RestorePassword/>}/>
                <Route path={'/testPage'}
                       render={() => <TestPage/>}/>
                <Route path={'/inputpassword'}
                       render={() => <InputPassword/>}/>
                <Route path={'*'}
                       render={() => <Error404/>}/>
            </Switch>

        </div>
    );
}

export default App;
