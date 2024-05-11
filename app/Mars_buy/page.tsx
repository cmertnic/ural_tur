import style from './Mars_buy.module.scss'
import Bronirovanie from '@/app/Mars_buy/Bronirovanie/page'
const Mars_buy = () => {
  return (
    <div className={style.main}>
      <div className={style.main_row}>
        <Bronirovanie />
      </div>
    </div>
  );
};

export default Mars_buy;