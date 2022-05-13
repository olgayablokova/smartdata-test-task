import React from "react";
import {FaStar} from "react-icons/fa";

export const Icon = ({selected: boolean = false, onSelect = f => f}) => {
    return (
        <FaStar color="{selected ? 'yellow' : 'grey'}"
                onClick={onSelect}/>
    );
}