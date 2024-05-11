'use client'
import style from './Block.module.scss'
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Chort from "@/public_img/Mars/mars_buy/Chort.png";
import Revun from "@/public_img/Mars/mars_buy/Revun.png";
import Rock from "@/public_img/Mars/mars_buy/Rock.png";
import { ROUTER } from "@/router/router.enum";
const Button = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <button onClick={handleClick} style={{ backgroundColor: isClicked ? '#28AFB8' : '#F4F4F4' }}>
      Профессиональный проводник
    </button>
  );
};
const Button2 = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <button onClick={handleClick} style={{ backgroundColor: isClicked ? '#28AFB8' : '#F4F4F4' }}>
      Страховка
    </button>
  );
};
const Button3 = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <button onClick={handleClick} style={{ backgroundColor: isClicked ? '#28AFB8' : '#F4F4F4' }}>
      Фотограф/видеооператор
    </button>
  );
};
const Button4 = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <button onClick={handleClick} style={{ backgroundColor: isClicked ? '#28AFB8' : '#F4F4F4' }}>
      Аренда туристического оборудования
    </button>
  );
};

const Bronirovanie = () => {
  return (
    <div className={style.Block}>
      <div className={style.Block_row}>
        <h2>Бронирование</h2>
        <div className={style.Region_and_service}>
          <div className={style.Region_and_service_row}>
            <div className={style.Region}>
              <h3>Регион:<span className={style.blue}>Свердловская область</span></h3>
              <h3>Наименование маршрута:<span className={style.blue}>Уральский марс</span></h3>
              <h3>Выбранные зоны:</h3>
              <div className={style.Images}>
                <Image src={Chort} alt='Chort' />
                <Image src={Revun} alt='Revun' />
                <Image src={Rock} alt='Rock' />
              </div>
              <h3>Предполагаемая дата похода:12.05.2024</h3>
              <div className={style.Cost_and_people}>
                <h3>Кол-во человек:16</h3>
                <h3>Стоимость:24 тыс.руб.</h3>
              </div>
            </div>
            <div className={style.Service}>
              <h2>Дополнительные услуги:</h2>
              <div className={style.Buttons}>
                <Button />
                <Button2 />
                <Button3 />
                <Button4 />
              </div>
            </div>
          </div>
        </div>
        <h2>Комментарий к заказу:</h2>
        <textarea id="story" name="story" />
        <h2>Email:</h2>
       <div className={style.email_div}>
        <input type="email" name="email" />
        <h2>Итоговая стоимость:26 тыс. руб.</h2>
        </div> 
        <input className={style.select_way} type="submit" value="Забронировать!" />
      </div>
    </div>

  );
};

export default Bronirovanie; 