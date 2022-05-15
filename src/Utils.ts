import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootReducer} from "./Store/Index";

type RootState = ReturnType<typeof RootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;