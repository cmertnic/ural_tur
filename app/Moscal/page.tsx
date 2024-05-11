import style from './Moscal.module.scss'
import Route_and_difficulty from '@/app/Moscal/Route_and_difficulty/page'
import Interesting_places from '@/app/Moscal/Interesting_places/page'
const Moscal = () => {
  return (
    <div className={style.main}>
      <div className={style.main_row}>
        <Route_and_difficulty />
        <Interesting_places />
      </div>
    </div>
  );
};

export default Moscal;