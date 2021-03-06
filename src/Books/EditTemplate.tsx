import {FaSave, FaWindowClose} from "react-icons/fa";
import React from "react";
import {useInput} from "../Utils";
import {updateBook} from "./Store/Utils";
import {IRecord} from "./Store/Reducer";

interface IProps {
    book: IRecord,
    token: string,
    onCansel: React.MouseEventHandler<SVGElement>
}

export const EditTemplate = ({book,
                              token,
                              onCansel = (f: unknown) => f}: IProps) => {
    // const {state: name, onChange: nameChange} = useInput(book.name);
    // const {state: desc, onChange: descChange} = useInput(book.desc);
    // let params = {
    //     id: book.id,
    //     body: {
    //         name: book.name,
    //         author_id: book.author_id,
    //         desc: book.desc,
    //         publication_date: book.publication_date
    //     }
    // }

    return (
        <>
            {/*<input type="text" value={name} onChange={(e) => nameChange(e)}/>*/}
            {/*<input type="text" value={desc} onChange={(e) => descChange(e)}/>*/}
            {/*<FaSave onClick={() => {*/}
            {/*    // @ts-ignore*/}
            {/*    dispatch(updateBook(params, token));*/}
            {/*}}/>*/}
            <FaWindowClose onClick={onCansel}/>
        </>
    );
}