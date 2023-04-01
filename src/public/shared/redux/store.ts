import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import pageReducer from './page/pageSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        page: pageReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
