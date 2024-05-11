import style from './Moscal.module.scss'
import Interesting_places from '@/app/Moscal_select_way/Interesting_places/page'
const Moscal = () => {
  return (
    <div className={style.main}>
      <div className={style.main_row}>
        <Interesting_places />
      </div>
    </div>
  );
};

export default Moscal;