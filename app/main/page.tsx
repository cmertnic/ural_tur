import style from './Main.module.scss'
import Create_your_way from "@/app/main/Create_your_way/page";
import Slogan from "@/app/main/Slogan/page";
import Actions from "@/app/main/Actions/page";
import Comment from "@/app/main/Coment/page";
import Mail from "@/app/main/Mail/page";
const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.main_row}>   
      <Create_your_way/>
      <Slogan/>
      <Actions/>
      <Comment/>
      <Mail/>
      </div>
    </div>
  );
};

export default Main;