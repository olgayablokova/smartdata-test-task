import {FaPencilAlt, FaTrashAlt} from "react-icons/fa";
import React from "react";
import {IRecord} from "../Books/Store/Reducer";

interface IProps {
    onEdit: React.MouseEventHandler<SVGElement>,
    onDelete: React.MouseEventHandler<SVGElement>
}

export const ItemAction = ({onEdit, onDelete}:IProps) => {
    return (
        <>
            <FaPencilAlt onClick={onEdit}/>
            <FaTrashAlt onClick={onDelete}/>
        </>
    );
}