import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query/react'
import { ipfsApi } from './ipfsApi';

const rootReducer = combineReducers({
    [ipfsApi.reducerPath]: ipfsApi.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ipfsApi.middleware)
});

setupListeners(store.dispatch)