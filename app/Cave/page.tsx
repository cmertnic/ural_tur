import style from './Cave.module.scss'
import Route_and_difficulty from '@/app/Cave/Route_and_difficulty/page'
import Interesting_places from '@/app/Cave/Interesting_places/page'
const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.main_row}>   
      <Route_and_difficulty />
        <Interesting_places />
      </div>
    </div>
  );
};

export default Main;