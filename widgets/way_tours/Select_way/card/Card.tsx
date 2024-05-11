"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import style from "@/widgets/way_tours/Select_way/card/Card.module.scss";
import { useState } from "react";
interface CardProps {
    img: StaticImageData;
    title: string;
    text: string;
}
const Card = ({ img, title, text }: CardProps) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked((prev) => !prev);
    };
    return (

        <button onClick={handleClick} style={{ backgroundColor: isClicked ? '#28AFB8' : '#F4F4F4' }} className={style.Card}>

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
        </button>
    );
}
export default Card;