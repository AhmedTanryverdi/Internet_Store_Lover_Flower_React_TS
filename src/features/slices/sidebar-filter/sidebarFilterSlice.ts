import { CHECKBOX_FILTERS, RANGE_FILTER, TAGS } from "@/shared/lib/constants";
import { createSlice } from "@reduxjs/toolkit";

const sideBarFilterSlice = createSlice({
	name: "sideBarFilterSlice",
	initialState: {
		checkboxFilters: CHECKBOX_FILTERS,
		rangeFilter: RANGE_FILTER,
		tags: TAGS,
	},

	reducers: {
		setCheckboxFilter(state, actions) {
			state.checkboxFilters = actions.payload;
		},
		setRangeMinFilter(state, action) {
			state.rangeFilter = { ...state.rangeFilter, min: action.payload };
		},
		setRangeMaxFilter(state, action) {
			state.rangeFilter = { ...state.rangeFilter, max: action.payload };
		},

		setTags(state, action) {
			state.tags = action.payload;
		},
	},
});

export const { setCheckboxFilter, setRangeMinFilter, setRangeMaxFilter, setTags } =
	sideBarFilterSlice.actions;
export default sideBarFilterSlice.reducer;
