"use client";
import React from "react";

import { ArrowBack } from "@/app/imgs/imgIndex/imgIndex";
import Image from "next/image";
import { ICheckbox } from "../NewProductsBlock";
interface IProps {
    type:ICheckbox;
    SetTypesFunc: (type:ICheckbox, id: number ) => void;
    index:number;
};
export const TypesComponent = ({ SetTypesFunc,type,index }: IProps) => {

    const event=(e:any) => {
        type.isChecked=e.target.checked
        SetTypesFunc(type,index)
    }
    console.log(type)

    return (
        <div className="NewProductsBlock_header_left_filters_filters_additional_type_container">
          
            <div className="NewProductsBlock_header_left_filters_filters_additional_type_el">
                <label form={type.article}>{type.name}</label>
                {/* { type.isChecked ?  (<input type="checkbox" id={type.article} checked  onChange={(e)=>{
                          
                           event(e)
                    }} />) :
                    ( */}
                    <input type="checkbox" id={type.article}   onChange={(e)=>{
                        
                        event(e)
                    }} />
                {/* )
                } */}
                
            </div>

        </div>
    );
};