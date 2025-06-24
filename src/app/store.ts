import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {sidebarFilterSlice} from "@/features/slices/index";
import {sortSlice} from "@/features/slices/index";

export const store = configureStore({
	reducer: {
		sideBarFilter: sidebarFilterSlice,
		sort: sortSlice,
	},
});

export type RooteState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
