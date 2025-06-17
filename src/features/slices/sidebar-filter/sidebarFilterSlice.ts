import { CHECKBOX_FILTERS, RANGE_FILTER } from "@/shared/lib/constants";
import { createSlice } from "@reduxjs/toolkit";

const sideBarFilterSlice = createSlice({
	name: "sideBarFilterSlice",
	initialState: {
		checkboxFilters: CHECKBOX_FILTERS,
		rangeFilter: RANGE_FILTER,
	},
	reducers: {
		changeFilter(state, actions) {
			state.checkboxFilters = actions.payload
		},
	},
});

export const { changeFilter } = sideBarFilterSlice.actions;
export default sideBarFilterSlice.reducer;
