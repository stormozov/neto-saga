import {
	type TypedUseSelectorHook,
	useDispatch,
	useSelector,
} from "react-redux";
import type { AppDispatch, RootState } from "./store";

/** Типизированный хук для доступа к диспатчу. */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/** Типизированный селектор для доступа к состоянию. */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
