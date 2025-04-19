"use client";
import React from "react";

import { ArrowBack } from "@/app/imgs/imgIndex/imgIndex";
import Image from "next/image";
import { ISizeCheckbox } from "../NewProductsBlock";
interface IProps {
    type: ISizeCheckbox;
    SetSizesFunc: (type: ISizeCheckbox, id: number) => void;
    index: number;
};
export const SizesComponent = ({ SetSizesFunc, type, index }: IProps) => {

    const event = (e: any) => {
        type.isChecked = e.target.checked
        SetSizesFunc(type, index)
    }
    console.log(type)

    return (
        <div className="NewProductsBlock_header_left_filters_filters_additional_type_container">


            <div className="NewProductsBlock_header_left_filters_filters_additional_size_el">
                <label form={type.article}>{type.name}</label>
                <input type="checkbox" id={type.article} onChange={(e) => {

                    event(e)
                }}
                />
            </div>
            

        </div>
    );
};