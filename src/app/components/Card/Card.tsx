"use client"
import React, { useState } from 'react'
import "./Card.scss"
import Image from 'next/image'
import { CardBasket, SockImg } from '@/app/imgs/imgIndex/imgIndex'

import { article } from 'framer-motion/client'
import { iCard } from '@/app/types/interface'

const Card = ({name,article,price}:iCard) => {
  const [isShown, setIsShown] = useState(false)
  return (
    <div className='Card_container'>
      <Image src={SockImg} alt=''></Image>
      <div className='Card_container_main'>
        <div className="Card_container_main_name">{name}</div>
        <div className="Card_container_main_bottom">
            <div className="Card_container_main_bottom_left">
                <div className="Card_container_main_bottom_left_id">Арт {article}</div>
                <div className="Card_container_main_bottom_left_price">{price} ₽</div>        
            </div>
            
                <Image className='Card_container_main_bottom_left_price_btn' src={CardBasket} alt='' onClick={()=> setIsShown(true)}></Image>
            
          </div>
      </div>
    </div>
  )
}

export default Card
