import { AppDispatch, RootState } from "domain/Store";
import { selectCount } from "domain/slices/counterSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// export const useAppDispatch: () => AppDispatch = useDispatch;
export const useCountSelector: TypedUseSelectorHook<RootState> = useSelector;
