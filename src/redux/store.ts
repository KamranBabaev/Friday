import {applyMiddleware, combineReducers, createStore} from 'redux';
import {reducerLogin} from './reducers/reducerLogin';
import thunk from 'redux-thunk';
import {reducerRegistration} from './reducers/reducerRegistration';
import {reducerRestorePassword} from './reducers/reducerRestorePassword';
import {appReducer} from './reducers/reducerApp';
import {reducerPacks} from './reducers/reducerPacks';
import {reducerCards} from './reducers/reducerCards';


const rootReducer = combineReducers({
    login: reducerLogin,
    registration: reducerRegistration,
    restore: reducerRestorePassword,
    app: appReducer,
    cards: reducerCards,
    packs: reducerPacks
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>