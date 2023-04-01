import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Iinfo, IUser } from "./IUser";
import UserService from "../../../pages/Main/services/user.service";
import { AppThunk } from "../store";

const initialState: IUser = {
    info: {
        typeOfDocument: 0,
        numberDocument: '',
        phone: '',
        email: '',
    },
    loading: false,
    error: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<Iinfo>) => {
            state.info = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            console.log("response: ", action.payload);
            state.loading = false;
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error?.message || 'Se ha generado un error';
        });
    }
});

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (_argv, thunkAPI) => {
        const { info } = thunkAPI.getState() as IUser;
        const response = await UserService.sendDataUser(info);
        return response;
    }
)

export const { setUser, setError, setLoading } = userSlice.actions;
export default userSlice.reducer;
