import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootReducer} from "./Store/Index";

export const TOKEN = 'Hb8tNmzz15gHJpHW';

type RootState = ReturnType<typeof RootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;