import style from './Mars.module.scss'
import Interesting_places from '@/app/Mars_select_way/Interesting_places/page'
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