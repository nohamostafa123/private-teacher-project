import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from './slices/Cards-layout-slice'; // path to your slice file

const store = configureStore({
    reducer: {
        layout: layoutReducer,
    },
});

export default store;
