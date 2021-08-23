import {applyMiddleware, combineReducers, createStore} from 'redux';
import {reducerLogin} from './reducers/reducerLogin';
import thunk from "redux-thunk";
import {reducerRegistration} from './reducers/reducerRegistration';


const rootReducer = combineReducers({
  login: reducerLogin,
  registration:reducerRegistration
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>