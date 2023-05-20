import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Sneakers, SneakersState } from '../models/sneakers';
import { useHttp } from '../hooks/call.hook';

export const fetchSneakers = createAsyncThunk(
    'sneakers/fetchSneakers',
    async () => {
        const { request } = useHttp()
        return await request('http://localhost:3001/Sneakers');
    }
)

const initialState = {
    sneaker: [],
    status: false,
    error: null,
} as SneakersState

export const sneakersSlice = createSlice({
    name: 'sneakers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSneakers.pending, state => { state.status = true })
            .addCase(fetchSneakers.fulfilled, (state: SneakersState, action) => {
                state.status = false;
                state.sneaker = action.payload as Sneakers[];
            })
            .addCase(fetchSneakers.rejected, (state: SneakersState, action) => {
                state.status = false;
                state.error = action.error.message as string;
            })
    }
})

export default sneakersSlice.reducer;