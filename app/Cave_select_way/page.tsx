import style from './Cave.module.scss'
import Interesting_places from '@/app/Cave_select_way/Interesting_places/page'
const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.main_row}>   
        <Interesting_places />
      </div>
    </div>
  );
};

export default Main;