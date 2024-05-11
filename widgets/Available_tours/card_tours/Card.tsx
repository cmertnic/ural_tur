"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import style from "@/widgets/Available_tours/card_tours/Card.module.scss";
interface CardProps {
    img: StaticImageData;
    title: string;
}
const Card2 = ({ img, title, }: CardProps) => {
    return (

        <div className={style.Card}>

            <Image className={style.img} src={img} alt={title} />

            <div className={style.textdiv}>
                <div>
                    <div className={style.title}>
                        {title}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card2;