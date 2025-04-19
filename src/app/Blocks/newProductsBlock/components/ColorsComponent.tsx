"use client";
import React from "react";

import { ArrowBack } from "@/app/imgs/imgIndex/imgIndex";
import Image from "next/image";
import { ICheckbox } from "../NewProductsBlock";


interface IProps {
    color: ICheckbox;
    SetColorsFunc: (color: ICheckbox, id: number) => void;
    index: number;
};

export const ColorsComponent = ({ SetColorsFunc, color, index }: IProps) => {
    const event = (e: any) => {

        color.isChecked = e.target.checked
        SetColorsFunc(color, index)
    }

    return (
        <div className="NewProductsBlock_header_left_filters_filters_additional_color_el">
            <label form={color.article}>{color.name}</label>

            {/* {color.isChecked ? (<input type="checkbox" id={color.article} checked onChange={(e) => {
                event(e)
            }} />) :
                (
                 */}
                <input type="checkbox" id={color.article} onChange={(e) => {
                    event(e)
                }} />
            {/* // )
            // } */}
        </div>

    )
}