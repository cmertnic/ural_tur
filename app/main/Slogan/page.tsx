import style from './Block.module.scss'
import Image from "next/image";
import Zuratkyl from "@/public_img/main_page/Slogan/Zuratkyl.png"
const Slogan = () => {

  return (
    <div className={style.Block}>
      <div className={style.Block_row}>
        <h2>Почуствуйте незабываемые ощущения и окунитесь в дикую природу вместе  с maikuro M.A.</h2>
        <div className={style.block_image_and_text}>
          <Image className={style.Zuratkyl_img} src={Zuratkyl} alt="Zuratkyl"></Image>
          <div className={style.block_text}>
            <h3>#Зюраткуль</h3>
            <h2>Хотите Побывать в горах или устроить сплав ?</h2>
            <p>Тогда мы готовы показать и предложить большое количество самых незабываемых вариантов вашего отдыха!
              В  зюраткуле много мест где  монжо остаться на едине с природой  или погрузиться
              в  тёмные  пещеры для  изучения их тайн</p>
          </div>

        </div>

      </div>
    </div>


  );
};

export default Slogan;