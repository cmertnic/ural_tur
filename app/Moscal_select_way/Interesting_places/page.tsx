'use client'
import style from './Block.module.scss'
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ROUTER } from "@/router/router.enum";
import Card_Select_way from '@/widgets/way_tours/Select_way/card/Card';
import massive_way_tours_1 from '@/widgets/way_tours/Moscal/massive_moscal_tours_1';
import massive_way_tours_2 from '@/widgets/way_tours/Moscal/massive_moscal_tours_2';
import massive_way_tours_3 from '@/widgets/way_tours/Moscal/massive_moscal_tours_3';
import massive_way_tours_4 from '@/widgets/way_tours/Moscal/massive_moscal_tours_4';
const Actions = () => {
  return (
    <div className={style.Block}>
      <div className={style.Block_row}>
        <h2>Выбор зон на маршруте</h2>
        <div className={style.cards}>
          {massive_way_tours_1.map((card, i) => <Card_Select_way img={card.img} title={card.title} text={card.text} />)}
          {massive_way_tours_2.map((card, i) => <Card_Select_way img={card.img} title={card.title} text={card.text} />)}
          {massive_way_tours_3.map((card, i) => <Card_Select_way img={card.img} title={card.title} text={card.text} />)}
          {massive_way_tours_4.map((card, i) => <Card_Select_way img={card.img} title={card.title} text={card.text} />)}
          <button className={style.select_way}><Link href="/Moscal_buy">
            Забронировать!</Link>
          </button>
        </div>

      </div>
    </div>

  );
};

export default Actions; 