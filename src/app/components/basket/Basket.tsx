"use client"

import React, { useState } from 'react'
import "./Basket.scss"
import Image from 'next/image'
import { BasketI, CloseIcon } from '@/app/imgs/imgIndex/imgIndex'


const Basket = () => {
  const [isShown, setIsShown] = useState(false)
  return (
    <div style={{
      height: "100%",
      width: "100%"
    }}>
      <div className={isShown? "basket_background_active" : "basket_background_unactive"}></div>
        <Image src={BasketI} alt='' onClick={()=> setIsShown(true)}></Image>
        <div className={`Basket ${isShown? "active" : "unactive"}`}>
            <div className='Basket_elements'>
              <div className="Basket_close">
                <Image src={CloseIcon} alt='' onClick={()=> setIsShown(false)}></Image>
              </div>
              <div className="Basket_Title">Корзина</div>
              <div className="Basket_txt">Сформируйте заказ и оставьте контактные данные.
              Мы свяжемся с вами в ближайшее время. </div>
              <button>Оформить заявку</button>
            </div>
        </div>
        
    </div>
  )
}

export default Basket