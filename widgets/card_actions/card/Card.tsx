"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import style from "@/widgets/card_actions/card/Card.module.scss";
import { useState } from "react";
interface CardProps {
    img: StaticImageData;
    title : string;
    text : string;
    alt_text : string;
    cost : string;
    last_cost: string;
}
const Card = ({ img, title, text, alt_text, cost, last_cost }: CardProps) => {
    const [ismodal, setmodal] = useState(false)
    return (
        <>
            {ismodal &&
                <div className={style.modal}>
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
                                    <h2>{title}</h2>
                                    <p>{alt_text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
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
                    <div className={style.cost_and_more_div}>
                        <div className={style.cost_div}>
                            <div className={style.cost}>
                                {cost}
                            </div>
                            <div className={style.last_cost}>
                                {last_cost}
                            </div>
                        </div>
                        <h3 className={style.more_info} onClick={() => setmodal(!ismodal)}>Подробнее...</h3>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Card;