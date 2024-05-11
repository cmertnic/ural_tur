'use client'
import style from './Block.module.scss'
import Image from "next/image";
import { useState } from "react";
import Card from '@/widgets/card_actions/card/Card';
import Card2 from '@/widgets/Available_tours/card_tours/Card';
import Link from "next/link";
import { ROUTER } from "@/router/router.enum";
import massive_tours_1 from '@/widgets/Available_tours/card_massive/massive_tours_1';
import massive_tours_2 from '@/widgets/Available_tours/card_massive/massive_tours_2';
import massive_tours_3 from '@/widgets/Available_tours/card_massive/massive_tours_3';
import Masive_actions_1 from '@/widgets/card_actions/card_massive/massive_actions_1';
import Masive_actions_2 from '@/widgets/card_actions/card_massive/massive_actions_2';
import Masive_actions_3 from '@/widgets/card_actions/card_massive/massive_actions_3';
import Masive_actions_4 from '@/widgets/card_actions/card_massive/massive_actions_4';
import Masive_actions_5 from '@/widgets/card_actions/card_massive/massive_actions_5';
import Masive_actions_6 from '@/widgets/card_actions/card_massive/massive_actions_6';
const Actions = () => {
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
      <div className={style.Block}  id='action'>
        <div className={style.Block_row}>
          <div className={style.Actions_top}>
            <div>
              <h2>Акции</h2>
              <p>Наша турфирма предлагает вам принять участие в свежих акциях, которые помогут сделать ваше путешествие еще более ярким и незабываемым!</p>
            </div>
            <button onClick={() => setmodal(!ismodal)} className={style.burger}>
              Поиск по требованиям
            </button>
          </div>
          <div className={style.Cards}>
            {Masive_actions_1.map((card, i) => <Card img={card.img} title={card.title} text={card.text} alt_text={card.alt_text} cost={card.cost} last_cost={card.last_cost} />)}
            {Masive_actions_2.map((card, i) => <Card img={card.img} title={card.title} text={card.text} alt_text={card.alt_text} cost={card.cost} last_cost={card.last_cost} />)}
            {Masive_actions_3.map((card, i) => <Card img={card.img} title={card.title} text={card.text} alt_text={card.alt_text} cost={card.cost} last_cost={card.last_cost} />)}
            {Masive_actions_4.map((card, i) => <Card img={card.img} title={card.title} text={card.text} alt_text={card.alt_text} cost={card.cost} last_cost={card.last_cost} />)}
            {Masive_actions_5.map((card, i) => <Card img={card.img} title={card.title} text={card.text} alt_text={card.alt_text} cost={card.cost} last_cost={card.last_cost} />)}
            {Masive_actions_6.map((card, i) => <Card img={card.img} title={card.title} text={card.text} alt_text={card.alt_text} cost={card.cost} last_cost={card.last_cost} />)}
          </div>
        </div>

      </div>
    </>

  );
};

export default Actions;