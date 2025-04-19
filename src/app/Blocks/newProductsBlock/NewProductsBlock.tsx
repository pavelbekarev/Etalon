"use client";
import React, { useEffect, useState } from "react";
import "./NewProductsBlock.scss";
import Card from "@/app/components/Card/Card";
import { ArrowBack, ArrowUp, Filter_Arrow } from "@/app/imgs/imgIndex/imgIndex";
import Image from "next/image";
import { cardsInfo } from "./constants";
import { CardModel } from "@/app/components/Card/model/index";
import axios from "axios";
import { IProduct ,ICategory} from "@/app/types/interface";
import { ColorsComponent } from "./components/ColorsComponent";
import { TypesComponent } from "./components/TypesComponent";
import { SizesComponent } from "./components/SizesComponent";

export interface ICheckbox {
    name:string;
    isChecked:boolean;
    article:string;
    id:number;
};
export interface ISizeCheckbox {
    name:string;
    min:number;
    max:number;
    isChecked:boolean;
    article:string;
    id:number;
};
const NewProductsBlock = () => {
  const [mode, setMode] = useState<string>("все");
  const [filter, setFilter] = useState<string>("");
  const [showMore, setShowMore] = useState<boolean>(false);


  const [types,setTypeProduct]=useState<Array<ICheckbox>>([])

  const [colors,setColorsProduct]=useState<Array<ICheckbox>>([])
  const [sizes,setSizesProduct]=useState<Array<ISizeCheckbox>>([])

  const setTypeTypes=(type:ICheckbox,id:number)=>{
    let localType=types
    localType[id]=type
    setTypeProduct(localType)
    console.log(localType)
  }
  const setColorTypes=(color:ICheckbox,id:number)=>{

    let localColors=colors
    localColors[id]=color
    setColorsProduct(localColors)
    console.log(color)
    console.log(localColors)
  }

  const setSizeTypes=(size:ISizeCheckbox,id:number)=>{

    let localsizes=sizes
    localsizes[id]=size
    setSizesProduct(localsizes)
    console.log(size)
    console.log(localsizes)
  }


  // const [size,setSizeProduct]=useState<string>("all")
  // const [maxsize,setMaxSizeProduct]=useState<number>(0)
  // const [minsize,setMinSizeProduct]=useState<number>(0)


  const [products, setProducts] = useState<IProduct[]>([])
  const [FilteredProducts, setFilteredProducts] = useState<IProduct[]>([])

  const [filtersOpen, setIsFiltersOpen] = useState(false);

  useEffect(() => {
    new CardModel();
  });

  const ChooseColor = () => {
    setFilter("color");
  };

  const ChooseSize = () => {
    setFilter("size");
  };

  const ChooseType = () => {
    setFilter("type");
  };
  //http://95.163.228.30/api/product/products/
    
  const getProducts = async () => {
      const data: IProduct[] = await axios.get("https://etalon-socks.ru/nest/api/product/products/", {
        headers: {
          Authorization: localStorage.getItem('userToken') || "",
          email: localStorage.getItem('userEmail') || "",
          login: localStorage.getItem('userLogin') || "",
        }
      }).then(res => res.data)
      console.log(data)
      setProducts(data)
      setFilteredProducts(data)
    }
  React.useEffect(() => {
    ResetFilters()
    getProducts()
  }, []);
  // let FilteredProducts = products.filter(
  //   ({ name, ISBN, autor }) =>
  //     name.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
  //     autor.name_autor.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
  //     ISBN.toLowerCase().indexOf(text.toLowerCase()) > -1
  // );




  const ResetFilters=()=>{
    setTypeProduct([
      {name:"Носки",isChecked:false,article:"socks",id:0},
      {name:"Гольфы",isChecked:false,article:"golfs",id:1},
      {name:"Чулки",isChecked:false,article:"chulki",id:2},
    ])
    setColorsProduct([
      {name:"Черный",isChecked:false,article:"black",id:0},
      {name:"Белый",isChecked:false,article:"white",id:1},
      {name:"Серый",isChecked:false,article:"grey",id:2},
      {name:"Синий",isChecked:false,article:"blue",id:3},
      {name:"Зеленый",isChecked:false,article:"green",id:4},
      {name:"Яркий",isChecked:false,article:"yarkiy",id:5},
      {name:"С узором",isChecked:false,article:"symbols",id:6},
    ])
    setSizesProduct([
      {name:"35-40",isChecked:false,article:"35-40",id:0,min:35,max:40},
      {name:"41-43",isChecked:false,article:"41-43",id:1,min:41,max:43},
      {name:"44-46",isChecked:false,article:"44-46",id:2,min:44,max:46},
      {name:"46-48",isChecked:false,article:"46-48",id:3,min:46,max:48},
    ])
    if (products.length>0) {
      
    setFilteredProducts(products)
    }
  }
  const SetFilterProduct=()=>{
    let FPr = products
      FPr = FPr.filter((product) =>{

        return types.find(el=>el.name==product.typesocks.name)?.isChecked
      })
    
      FPr = FPr.filter((product) =>{

        return colors.find(el=>el.name==product.colorsocks.name)?.isChecked

      })
      FPr = FPr.filter((product) =>{

        return sizes.find(el=>
          el.min<product.min&&
          el.max>product.max)
        ?.isChecked

      })
    
    console.log(FPr)
    setFilteredProducts(FPr)
   // return FPr
  }
  let FilteredProductsFinal = FilteredProducts
  
  if (mode != "все") {
    console.log(mode)
    FilteredProductsFinal = FilteredProductsFinal.filter((product) => product.category.name==mode)
  }
  return (
    <div className="NewProductsBlock" id="NewProductsBlock">
      <div className="NewProductsBlock_header">
        <div className="NewProductsBlock_header_left">
          <div
            className={`NewProductsBlock_header_left_filters ${
              filtersOpen ? " clicked" : ""
            }`}
          >
            <button onClick={() => setIsFiltersOpen(!filtersOpen)}>
              фильтры
              {filtersOpen ? (
                <Image src={ArrowUp} alt=""></Image>
              ) : (
                <Image src={ArrowBack} alt=""></Image>
              )}
            </button>
            <div
              className={`NewProductsBlock_header_left_filters_filters ${
                filtersOpen ? "" : "off"
              }`}
            >
              <div className="NewProductsBlock_header_left_filters_filters_container">
                <div className="NewProductsBlock_header_left_filters_filters_top">
                  Фильтры
                  <p className="NewProductsBlock_header_left_filters_filters_top_additional" onClick={ResetFilters}>
                    Сбросить все
                  </p>
                </div>
                <div
                  className="NewProductsBlock_header_left_filters_filters_type"
                  onClick={() => ChooseType()}
                >
                  тип товара
                  <Image src={Filter_Arrow} alt=""></Image>
                </div>
                <div
                  className="NewProductsBlock_header_left_filters_filters_color"
                  onClick={() => ChooseColor()}
                >
                  цвет
                  <Image src={Filter_Arrow} alt=""></Image>
                </div>

                <div
                  className="NewProductsBlock_header_left_filters_filters_size"
                  onClick={() => ChooseSize()}
                >
                  размер
                  <Image src={Filter_Arrow} alt=""></Image>
                </div>
                <div className="NewProductsBlock_header_left_filters_filters_btn">
                  <button>применить</button>
                </div>
              </div>
            </div>

            <div
              className={`NewProductsBlock_header_left_filters_filters_additional_type ${
                filtersOpen && filter === "type" ? "" : "off"
              }`}
            >
              
              <div className="NewProductsBlock_header_left_filters_filters_additional_type_container">
                <div className="NewProductsBlock_header_left_filters_filters_additional_type_top">
                  <div className="NewProductsBlock_header_left_filters_filters_additional_type_top_left">
                    <Image
                      src={ArrowBack}
                      alt=""
                      onClick={() => setFilter("")}
                    />
                    Тип товара
                  </div>
                  <p className="NewProductsBlock_header_left_filters_filters_additional_type_top_additional" onClick={ResetFilters}>
                    Сбросить все
                  </p>
                </div>
                {types.map((item)=>(<TypesComponent SetTypesFunc={setTypeTypes} key={item.id} index={item.id} type={item}/>))}
                <div className="NewProductsBlock_header_left_filters_filters_additional_type_btn">
                  <button onClick={()=>{SetFilterProduct()}}>применить</button>
                </div> *
              </div>
            </div>

            <div
              className={`NewProductsBlock_header_left_filters_filters_additional_size ${
                filtersOpen && filter === "size" ? "" : "off"
              }`}
            >
              <div className="NewProductsBlock_header_left_filters_filters_additional_size_container">
                <div className="NewProductsBlock_header_left_filters_filters_additional_size_top">
                  <div className="NewProductsBlock_header_left_filters_filters_additional_type_top_left">
                    <Image
                      src={ArrowBack}
                      alt=""
                      onClick={() => setFilter("")}
                    ></Image>
                    Размер
                  </div>
                  <p className="NewProductsBlock_header_left_filters_filters_additional_size_top_additional" onClick={ResetFilters}>
                    Сбросить все
                  </p>
                </div>
                {sizes.map((item)=>(<SizesComponent SetSizesFunc={setSizeTypes} key={item.id} index={item.id} type={item}/>))}
                
                
                <div className="NewProductsBlock_header_left_filters_filters_additional_size_btn">
                  <button onClick={()=>{SetFilterProduct()}}>применить</button>
                </div>
              </div>
            </div>

            <div
              className={`NewProductsBlock_header_left_filters_filters_additional_color ${
                filtersOpen && filter === "color" ? "" : "off"
              }`}
            >
              <div className="NewProductsBlock_header_left_filters_filters_additional_color_container">
                <div className="NewProductsBlock_header_left_filters_filters_additional_color_top">
                  <div className="NewProductsBlock_header_left_filters_filters_additional_type_top_left">
                    <Image
                      src={ArrowBack}
                      alt=""
                      onClick={() => setFilter("")}
                    ></Image>
                    Цвет
                  </div>
                  <p className="NewProductsBlock_header_left_filters_filters_additional_color_top_additional" onClick={ResetFilters}>
                    Сбросить все
                  </p>
                </div>

                {colors.map((item)=>(<ColorsComponent SetColorsFunc={setColorTypes} key={item.id} index={item.id} color={item}/>))}

                <button
                  className="NewProductsBlock_header_left_filters_filters_additional_color_btn"
                  onClick={()=>{SetFilterProduct()}}
                >
                  применить
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="NewProductsBlock_header_right">
          <div
            className={`NewProductsBlock_header_right_filterBtn ${
              mode === "все" ? "active" : ""
            }`}
            onClick={() => {
              setMode("все")
            }
            }
          >
            все
          </div>
          <div
            className={`NewProductsBlock_header_right_filterBtn ${
              mode === "женские" ? "active" : ""
            }`}
            onClick={() => {
              setMode("женские")
            }}
          >
            женские
          </div>
          <div
            className={`NewProductsBlock_header_right_filterBtn ${
              mode === "мужские" ? "active" : ""
            }`}
            onClick={() => {
              setMode("мужские")

            }}
          >
            мужские
          </div>
          <div
            className={`NewProductsBlock_header_right_filterBtn ${
              mode === "детские" ? "active" : ""
            }`}
            onClick={() =>{
              
              setMode("детские")
            
            }}
          >
            детские
          </div>
        </div>
      </div>

      <div className="NewProductsBlock_container">
        {!showMore ? (
          <div className={`NewProductsBlock_container `}>
            <div
              className={`NewProductsBlock_container_background ${
                filtersOpen ? "background_active" : ""
              }`}
            ></div>
            {FilteredProductsFinal.map(
              (item, key) =>
                key <= 7 && (
                  <Card
                    key={key}
                    id={item.id}
                    article={item.article}
                    title={item.title}
                    priceDef={item.priceDef}
                    ImgUrls={item.ImgUrls}
                  />
                )
            )}
          </div>
        ) : (
          <div className={`NewProductsBlock_container `}>
            <div
              className={`NewProductsBlock_container_background ${
                filtersOpen ? "background_active" : ""
              }`}
            ></div>
            {FilteredProductsFinal.map((item, key) => {
              return  (
                <Card
                  key={key}
                  id={item.id}
                  article={item.article}
                  title={item.title}
                  priceDef={item.priceDef}
                  ImgUrls={item.ImgUrls}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="NewProductsBlock_buttonBlock">
        <div
          onClick={() => setShowMore(true)}
          className={
            showMore ? "NewProductsBlock_btn_off" : "NewProductsBlock_btn"
          }
        >
          Показать еще
        </div>
      </div>
    </div>
  );
};

export default NewProductsBlock;
