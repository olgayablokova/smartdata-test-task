import {FaPencilAlt, FaTrashAlt} from "react-icons/fa";
import React from "react";

export const ItemAction = ({onEdit = f => f, onDelete = f => f}) => {
    return (
        <>
            <FaPencilAlt onClick={onEdit}/>
            <FaTrashAlt onClick={onDelete}/>
        </>
    );
}