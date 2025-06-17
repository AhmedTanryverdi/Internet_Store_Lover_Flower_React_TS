import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import sidebarFilterSlice from "@/features/slices/sidebar-filter/sidebarFilterSlice";

export const store = configureStore({
	reducer: {
		sideBarFilter: sidebarFilterSlice,
	},
});

export type RooteState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
