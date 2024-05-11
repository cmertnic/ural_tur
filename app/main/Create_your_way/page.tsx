import style from './Block.module.scss'
import Image from "next/image";
import ural_canion from "@/public_img/main_page/create_your_way/ural_canion.png"
const Create_your_way = () => {

  return (
    <div className={style.Block}>
      <div className={style.Block_row}>
<h1>Кастомные туры — Создайте <font color="#28afb8">свой</font> неповторимый маршрут</h1>        
        <div className={style.image_container}>
          <Image className={style.ural_canion_img} src={ural_canion} alt="ural_canion"></Image>
        </div>


      </div>
    </div>


  );
};

export default Create_your_way;