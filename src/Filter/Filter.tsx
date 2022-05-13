import {SelectAuthor} from "../Books/CreateBook";
import {useTypedSelector} from "../Utils";
import {useDispatch} from "react-redux";
import {getAuthorBooks} from "../Books/Store/Utils";

export const Filter = () => {
    const {author_id} = useTypedSelector(state => state.filter);
    const dispatch = useDispatch();

    return (
        <div>
            <SelectAuthor userInfo={{author_id}}/>
            <button onClick={() => {
                dispatch({type: 'EDIT', payload: author_id});
                dispatch(getAuthorBooks(author_id));
            }}>Отфильтровать</button>
        </div>
    );
}