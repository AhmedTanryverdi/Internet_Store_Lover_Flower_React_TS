import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import sidebarFilterSlice from "@/features/slices/sidebar-filter/sidebarFilterSlice";
import sortSlice from "@/features/slices/sort/sort";

export const store = configureStore({
	reducer: {
		sideBarFilter: sidebarFilterSlice,
		sort: sortSlice,
	},
});

export type RooteState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
