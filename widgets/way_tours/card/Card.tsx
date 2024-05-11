"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import style from "@/widgets/way_tours/card/Card.module.scss";
import { useState } from "react";
interface CardProps {
    img: StaticImageData;
    title: string;
    text: string;
}
const Card_way_tours = ({ img, title, text }: CardProps) => {
    return (

            <div className={style.Card}>

                <Image className={style.img} src={img} alt={text} />

                <div className={style.textdiv}>
                    <div>
                        <div className={style.title}>
                            {title}
                        </div>
                        <div className={style.text}>
                            {text}
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default Card_way_tours;