'use client'
import style from './swipper.module.scss'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Ura from "@/public_img/main_page/coment/swipper/ura.png";
import Aleksandr from "@/public_img/main_page/coment/swipper/Aleksandr.png";
import Drozdova from "@/public_img/main_page/coment/swipper/Drozdova.png";
import Plotnikova from "@/public_img/main_page/coment/swipper/Plotnikova.png";
import Xromov from "@/public_img/main_page/coment/swipper/Xromov.png";
import 'swiper/css'
import { useSwiper } from 'swiper/react';
import { SetStateAction, useRef, useState } from "react";

const Swipper = () => {
  const swiper = useSwiper();
  const SwiperRef = useRef(null)
  const [slide, setSlide] = useState(0);
  const handleSlideIndex = (sw: { realIndex: SetStateAction<number>; }) => {
    setSlide(sw.realIndex);
  }
  const nextSlide = () => {
    SwiperRef.current.swiper.slideNext();
  }

  const prevSlide = () => {
    SwiperRef.current.swiper.slidePrev();
  }

  return (
    <main className={style.Main}>
      <div className={style.Main_row}>
        <Swiper className={style.Swiper}
          spaceBetween={10}
          slidesPerView={1}
          ref={SwiperRef}
          onSlideChange={handleSlideIndex}
        >
          <SwiperSlide className={style.SwiperSlide}>
            <div className={style.SwiperSlide_row}>
              <h2>Отзывы</h2>
              <div className={style.coment_and_profile}>
                <div className={style.profile}>
                  <Image src={Ura} alt={'Ura'} width={186} height={186} border-radius={180} />
                  <h3>Юра поперечный</h3>
                </div>
                <p>Я хочу выразить свою искреннюю благодарность тур агентству за незабываемое путешествие! С самого начала нашего общения,
                  сотрудники агентства проявили высокий профессионализм и
                  внимательность к каждой детали нашего путешествия.Вся наша поездка была организована на высшем уровне. Мы получили незабываемые эмоции</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.SwiperSlide}>
            <div className={style.SwiperSlide_row}>
              <h2>Отзывы</h2>
              <div className={style.coment_and_profile}>
                <div className={style.profile}>
                  <Image src={Aleksandr} alt={'Aleksandr'} width={186} height={186} border-radius={180} />
                  <h3>Александр Ибрагимович</h3>
                </div>
                <p>Прекрасное тур агентство Maikuro M.A.! Отличный выбор туров, профессиональные менеджеры и высокий уровень обслуживания. Рекомендую всем!</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.SwiperSlide}>
            <div className={style.SwiperSlide_row}>
              <h2>Отзывы</h2>
              <div className={style.coment_and_profile}>
                <div className={style.profile}>
                  <Image src={Drozdova} alt={'Drozdova'} width={186} height={186} border-radius={180} />
                  <h3>Дроздова Мария</h3>
                </div>
                <p>Уже не первый раз пользуюсь услугами агентства Maikuro M.A. и всегда остаюсь довольна! Отличные экскурсии, комфортное размещение и оперативное решение любых вопросов.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.SwiperSlide}>
            <div className={style.SwiperSlide_row}>
              <h2>Отзывы</h2>
              <div className={style.coment_and_profile}>
                <div className={style.profile}>
                  <Image src={Plotnikova} alt={'Plotnikova'} width={186} height={186} border-radius={180} />
                  <h3>Плотникова Ксения</h3>
                </div>
                <p>Спасибо команде Maikuro M.A. за отлично организованный отдых! Все было на высшем уровне - от трансфера до разнообразных экскурсий. Очень довольны!</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.SwiperSlide}>
            <div className={style.SwiperSlide_row}>
              <h2>Отзывы</h2>
              <div className={style.coment_and_profile}>
                <div className={style.profile}>
                  <Image src={Xromov} alt={'Xromov'} width={186} height={186} border-radius={180} />
                  <h3>Хромов Кирилл</h3>
                </div>
                <p>Отличное тур агентство Maikuro M.A.! Профессиональный подход, внимательное отношение к клиентам и отличное качество услуг. Обязательно буду обращаться еще!</p>
              </div>
            </div>
          </SwiperSlide>
          <div className={style.swipper_buttons}>
            <button onClick={() => prevSlide()}>
              <svg width="22" height="38" viewBox="0 0 22 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.23223 17.2322C0.255922 18.2085 0.255922 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.34602 18.1184 0.34602 17.1421 1.32233L1.23223 17.2322ZM7 16.5L3 16.5L3 21.5L7 21.5L7 16.5Z" fill="black" />
              </svg>
            </button>
            <button onClick={() => nextSlide()}>
              <svg width="22" height="38" viewBox="0 0 22 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.7678 20.7678C21.7441 19.7915 21.7441 18.2085 20.7678 17.2322L4.85786 1.32233C3.88155 0.34602 2.29864 0.34602 1.32233 1.32233C0.34602 2.29864 0.34602 3.88155 1.32233 4.85786L15.4645 19L1.32233 33.1421C0.34602 34.1184 0.34602 35.7014 1.32233 36.6777C2.29864 37.654 3.88155 37.654 4.85786 36.6777L20.7678 20.7678ZM17 21.5L19 21.5L19 16.5L17 16.5L17 21.5Z" fill="black" />
              </svg>
            </button>
          </div>

        </Swiper>
      </div>



    </main>
  );
}

export default Swipper;

