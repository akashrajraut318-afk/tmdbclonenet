import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
// optionally import additional reducers if not included in rootReducer


const store = configureStore({
    reducer: rootReducer,
});

export default store; 