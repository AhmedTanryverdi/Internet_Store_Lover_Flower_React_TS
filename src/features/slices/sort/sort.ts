import { createSlice } from "@reduxjs/toolkit";

type SortType = {
    sortOrder: string;
}

const initialState: SortType = {
    sortOrder: "rating"
}

const sortSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
        sort(state, action){
            state.sortOrder = action.payload
        }
    }
})

export const {sort} = sortSlice.actions;

export default sortSlice.reducer;