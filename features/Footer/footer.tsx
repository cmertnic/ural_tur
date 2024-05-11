'use client'
import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import React from "react";
import style from './footer.module.scss'
import Image from "next/image";
import logo from "@/public_img/footer/logo.svg";
import { useState } from "react";
import Card2 from '@/widgets/Available_tours/card_tours/Card';
import massive_tours_1 from '@/widgets/Available_tours/card_massive/massive_tours_1';
import massive_tours_2 from '@/widgets/Available_tours/card_massive/massive_tours_2';
import massive_tours_3 from '@/widgets/Available_tours/card_massive/massive_tours_3';
const Footer = () => {
    const [ismodal, setmodal] = useState(false)
    return (
        <>
            {ismodal &&
                <form className={style.modal}>
                    <div className={style.modal_back}></div>
                    <div className={style.modal_content}>
                        <div className={style.flex}>
                            <button onClick={() => setmodal(!ismodal)} className={style.btn_exit}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M36 12L12 36" stroke="black" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 12L36 36" stroke="black" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <div className={style.info}>
                                <div className={style.textdiv}>
                                    <div className={style.modal_top} >
                                        <h2>Выберите подходящие условия</h2>
                                        <div className={style.input_and_text_divs}>
                                            <div className={style.input_and_text_div}>
                                                <h2>Регион</h2>
                                                <select name="Region" id='Region'>
                                                    <option value="">ALL</option>
                                                    <option value="Омская область">Омская область</option>
                                                    <option value="Пермская область">Периская область</option>
                                                    <option value="Республика Башкортостан">Республика Башкортостан</option>
                                                    <option value="Оренбургская область">Оренбургская область</option>
                                                    <option value="Республика Коми">Республика Коми</option>
                                                    <option value="Томская область">Томская область</option>
                                                    <option value="Красноярский край">Красноярский край</option>
                                                    <option value="Таймырский АО">Таймырский АО</option>
                                                    <option value="Ненецкий АО">Ненецкий АО</option>
                                                </select>

                                            </div>
                                            <div className={style.input_and_text_div}>
                                                <h2>Число участников</h2>
                                                <select name="Number_of_participants" id='Number_of_participants'>
                                                    <option value="">ALL</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="13">13</option>
                                                    <option value="14">14</option>
                                                    <option value="15">15</option>
                                                    <option value="16">16</option>
                                                </select>
                                            </div>
                                            <div className={style.input_and_text_div}>
                                                <h2>Уровень подготовки</h2>
                                                <select name="Level_of_skill" id='Level_of_skill'>
                                                    <option value="">ALL</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>
                                            <div className={style.input_and_text_div}>
                                                <h2>Дата</h2>
                                                <input type="date" id="start" name="trip-start" min="2024-01-01" max="2024-12-31" />
                                            </div>
                                            <button className={style.burger}>
                                                Поиск по требованиям
                                            </button>
                                        </div>

                                    </div>
                                    <div className={style.modal_bottom}>
                                        <h2>Подходящие туры</h2>
                                        <div className={style.cards}>
                                            <Link href={"/Mars"} onClick={() => setmodal(!ismodal)}><div>
                                                {massive_tours_1.map((card, i) => <Card2 img={card.img} title={card.title} />)}
                                            </div></Link>

                                            <Link href={"/Cave"} onClick={() => setmodal(!ismodal)}><div>
                                                {massive_tours_2.map((card, i) => <Card2 img={card.img} title={card.title} />)}
                                            </div></Link>

                                            <Link href={"/Moscal"} onClick={() => setmodal(!ismodal)}><div>
                                                {massive_tours_3.map((card, i) => <Card2 img={card.img} title={card.title} />)}
                                            </div></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            }
            <footer className={style.footer}>
                <div className={style.footer_row}>
                    <Link href="/main" ><Image src={logo} alt="logo" /></Link>
                    <ul>
                    <Link href="/main#action" ><li>Акции</li></Link>
                        <li onClick={() => setmodal(!ismodal)}>Поиск</li>
                        <Link href="/marketplace" ><li>Управление бронированием</li></Link>
                    </ul>
                    <ul>
                        <Link href="/marketplace" ><li>Партнёры</li></Link>
                        <Link href="tel:+78005553535" ><li>контактный номер: +78005553535</li></Link>
                        <Link href="mailto:lskutin@yandex.ru" ><li>почта: lskutin@yandex.ru</li></Link>
                    </ul>
                    <div className={style.contact_div}>
                        <Link href="/marketplace" >
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2004_315)">
                                    <path d="M54.4 0H9.6C4.29807 0 0 4.29807 0 9.6V54.4C0 59.7019 4.29807 64 9.6 64H54.4C59.7019 64 64 59.7019 64 54.4V9.6C64 4.29807 59.7019 0 54.4 0Z" fill="#5281B8" />
                                    <path d="M34.25 45.3749C34.875 45.2499 36 44.9999 36 43.4999C36 43.4999 35.875 39.7499 37.625 39.2499C39.375 38.7499 41.625 42.8749 44 44.4999C45.75 45.6249 47.125 45.4999 47.125 45.4999L53.5 45.3749C53.5 45.3749 56.75 45.1249 55.25 42.4999C55.125 42.2499 54.125 40.6249 50.375 37.2499C46.5 33.4999 47.125 34.1249 51.75 27.7499C54.625 23.8749 55.875 21.4999 55.5 20.6249C55 19.7499 53 19.8749 53 19.8749H45.875C45.125 19.8749 44.75 19.9999 44.375 20.6249C44.375 20.6249 43.25 23.7499 41.75 26.2499C38.625 31.6249 37.375 31.8749 36.75 31.4999C35.625 30.8749 35.875 28.4999 35.875 26.8749C35.875 21.2499 36.75 19.2499 34.25 18.7499C32.625 18.4999 26.875 18.2499 25.125 19.1249C24.25 19.6249 23.75 20.4999 24.125 20.6249C24.5 20.6249 25.625 20.7499 26.25 21.4999C27.25 23.1249 27.375 30.8749 26 31.6249C24.125 32.9999 19.375 23.8749 18.25 20.8749C18 20.1249 17.625 19.9999 16.75 19.7499H9.87499C9.12499 19.7499 7.99999 19.8749 8.49999 21.3749C11.875 28.3749 18.875 45.4999 31.5 45.3749H34.25Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2004_315">
                                        <rect width="64" height="64" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                        <Link href="/marketplace" >
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2004_319)">
                                    <path d="M58.9474 0H5.05263C2.26214 0 0 2.26214 0 5.05263V58.9474C0 61.7379 2.26214 64 5.05263 64H58.9474C61.7379 64 64 61.7379 64 58.9474V5.05263C64 2.26214 61.7379 0 58.9474 0Z" fill="#FF9800" />
                                    <path d="M32 15.1577C30.3194 15.1577 28.6767 15.656 27.2794 16.5897C25.8821 17.5233 24.793 18.8504 24.1499 20.403C23.5068 21.9556 23.3385 23.664 23.6664 25.3122C23.9942 26.9604 24.8035 28.4744 25.9918 29.6627C27.1801 30.851 28.6941 31.6603 30.3423 31.9881C31.9905 32.316 33.699 32.1477 35.2516 31.5046C36.8042 30.8615 38.1312 29.7725 39.0648 28.3752C39.9985 26.9779 40.4968 25.3351 40.4968 23.6546C40.4974 22.5386 40.278 21.4334 39.8511 20.4023C39.4243 19.3712 38.7985 18.4343 38.0094 17.6451C37.2203 16.856 36.2833 16.2302 35.2522 15.8034C34.2211 15.3766 33.1159 15.1572 32 15.1577ZM32 27.8903C31.1622 27.8903 30.3433 27.6419 29.6467 27.1765C28.9501 26.7111 28.4072 26.0495 28.0866 25.2755C27.766 24.5015 27.6821 23.6499 27.8456 22.8282C28.009 22.0065 28.4124 21.2518 29.0048 20.6594C29.5972 20.067 30.3519 19.6636 31.1736 19.5002C31.9953 19.3367 32.8469 19.4206 33.6209 19.7412C34.3949 20.0618 35.0565 20.6047 35.5219 21.3013C35.9873 21.9979 36.2357 22.8168 36.2357 23.6546C36.2363 24.211 36.1271 24.762 35.9144 25.2762C35.7018 25.7903 35.3898 26.2575 34.9963 26.6509C34.6029 27.0444 34.1357 27.3564 33.6216 27.569C33.1074 27.7817 32.5564 27.8909 32 27.8903Z" fill="white" />
                                    <path d="M44.5221 33.4522C44.3371 33.1219 44.0888 32.8313 43.7913 32.597C43.4939 32.3627 43.1532 32.1894 42.7887 32.087C42.4242 31.9845 42.0431 31.9549 41.6672 31.9999C41.2913 32.0449 40.9279 32.1635 40.5979 32.3491C34.8126 35.5912 29.1874 35.5912 23.4021 32.3491C23.0703 32.1638 22.7053 32.0458 22.3279 32.0016C21.9505 31.9574 21.5681 31.988 21.2026 32.0916C20.837 32.1952 20.4954 32.3698 20.1973 32.6054C19.8992 32.8411 19.6505 33.1331 19.4652 33.4649C19.28 33.7966 19.1619 34.1616 19.1178 34.539C19.0736 34.9164 19.1042 35.2988 19.2078 35.6644C19.417 36.4027 19.911 37.0276 20.581 37.4017C22.479 38.4788 24.5066 39.3094 26.6147 39.8733L22.5221 43.9659C21.9845 44.5036 21.6824 45.2329 21.6824 45.9933C21.6824 46.7537 21.9845 47.4829 22.5221 48.0206C23.0598 48.5583 23.7891 48.8603 24.5495 48.8603C25.3098 48.8603 26.0391 48.5583 26.5768 48.0206L32 42.5764L37.4231 47.9996C37.9609 48.5372 38.6901 48.8393 39.4505 48.8393C40.2109 48.8393 40.9402 48.5372 41.4779 47.9996C42.0155 47.4619 42.3175 46.7326 42.3175 45.9722C42.3175 45.2118 42.0155 44.4826 41.4779 43.9449L37.3852 39.8522C39.4934 39.2883 41.521 38.4578 43.4189 37.3806C43.7498 37.1956 44.0409 36.9471 44.2756 36.6494C44.5102 36.3516 44.6837 36.0105 44.7862 35.6455C44.8887 35.2805 44.9181 34.8989 44.8728 34.5225C44.8275 34.1462 44.7083 33.7824 44.5221 33.4522Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2004_319">
                                        <rect width="64" height="64" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )

}

export default Footer;