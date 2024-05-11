import style from './Mars.module.scss'
import Route_and_difficulty from '@/app/Mars/Route_and_difficulty/page'
import Interesting_places from '@/app/Mars/Interesting_places/page'
const Mars = () => {
  return (
    <div className={style.main}>
      <div className={style.main_row}>
        <Route_and_difficulty />
        <Interesting_places />
      </div>
    </div>
  );
};

export default Mars;