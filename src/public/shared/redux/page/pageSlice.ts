import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IBanner} from "../../models/dataPage/IBanner";
import DataPageService from "../../../pages/Main/services/data-page.service";
import {IPage} from "./IPage";
import {ISection} from "../../models/dataPage/ISection";

const initialState: IPage = {
    title: '',
    logo: '',
    banner: [],
    body: {
        sections: []
    },
    loading: false,
    error: '',
}

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setLogo: (state, action: PayloadAction<string>) => {
            state.logo = action.payload;
        },
        setBanner: (state, action: PayloadAction<IBanner[]>) => {
            state.banner = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDataPage.pending, (state) => {
            // servira para mostrar loading mientras cargan los datos para mostrar la pagina
            state.loading = true;
        });
        builder.addCase(fetchDataPage.fulfilled, (state, action) => {
            document.title = action.payload.title;
            return {
                ...state,
                loading: false,
                title: action.payload.title,
                logo: require(`../../../assets/images/${action.payload.logo}`).default,
                banner: action.payload.banner?.map((item: IBanner) =>
                    ({
                        ...item,
                        background: require(`../../../assets/images/${item.background}`).default
                    })
                ),
                body: action.payload.body
            }
        });
        builder.addCase(fetchDataPage.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error?.message || 'Se ha generado un error';
        });
    }
});

export const fetchDataPage = createAsyncThunk(
    'page/fetchDataPage',
    async (_argv) => {
        // peticion a una api para obtener toda la configuracion de la pagina
        return DataPageService.getAllData();
    }
);

export const { setBanner } = pageSlice.actions;
export default pageSlice.reducer;