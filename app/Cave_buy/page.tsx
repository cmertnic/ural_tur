import style from './Cave_buy.module.scss'
import Bronirovanie from '@/app/Cave_buy/Bronirovanie/page'
const Cave_buy = () => {
  return (
    <div className={style.main}>
      <div className={style.main_row}>
        <Bronirovanie />
      </div>
    </div>
  );
};

export default Cave_buy;