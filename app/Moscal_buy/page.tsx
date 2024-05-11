import style from './Moscal_buy.module.scss'
import Bronirovanie from '@/app/Moscal_buy/Bronirovanie/page'
const Moscal_buy = () => {
  return (
    <div className={style.main}>
      <div className={style.main_row}>
        <Bronirovanie />
      </div>
    </div>
  );
};

export default Moscal_buy;