import { configureStore } from '@reduxjs/toolkit';
import useSlice from './useSlice';

const store = configureStore({
    reducer: {
        user: useSlice
    }
});

export default store;