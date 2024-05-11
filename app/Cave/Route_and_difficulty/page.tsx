'use client'
import style from './Block.module.scss'
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ROUTER } from "@/router/router.enum";
import Cave from "@/public_img/Cave/Cave.png";
const Actions = () => {
  return (
    <div className={style.Block}>
      <div className={style.Block_row}>
        <div className={style.block_image_and_text}>
          <Image className={style.Zuratkyl_img} src={Cave} alt="Cave"></Image>
          <div className={style.block_text}>
            <h3>#Пермский край</h3>
            <h2>Кунгурская пещера</h2>
            <div className={style.date}>
              <p>Предполагаемые даты похода:</p>
              <p className={style.p2}>В 2024: 14, 20, 28 апреля; 1, 11 мая</p>
            </div>
            <div className={style.div_stars_way} >
              <p>Сложность маршрута:</p>
              <div className={style.stars}>
                <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2125_20)">
                    <path d="M11.4999 0.19751L14.0818 9.62957H22.437L15.6775 15.4589L18.2594 24.891L11.4999 19.0616L4.74036 24.891L7.32227 15.4589L0.562744 9.62957H8.91798L11.4999 0.19751Z" fill="#C3CE44" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2125_20">
                      <rect width="23" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2125_20)">
                    <path d="M11.4999 0.19751L14.0818 9.62957H22.437L15.6775 15.4589L18.2594 24.891L11.4999 19.0616L4.74036 24.891L7.32227 15.4589L0.562744 9.62957H8.91798L11.4999 0.19751Z" fill="#C3CE44" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2125_20">
                      <rect width="23" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <p>Экскурсия в Кунгурскую ледяную пещеру – это знакомство со сверкающей горной архитектурой: сталагмитами и сталактитами, сказочными сводами, таинственными гротами и озёрами. В программе также вкусный обед в кафе, пуп Земли, Тихвинский храм, гончарная лавка. Всё включено!</p>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Actions; 