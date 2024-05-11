import style from './Block.module.scss'
const Mail = () => {

  return (
    <div className={style.Block}>
      <div className={style.Block_row}>

        <div className={style.text_and_mail}>
          <div className={style.text_block}>
            <h2>Хотите одним из первых узнавать о новых акциях ?</h2>
            <p>Оставьте свой email и мы свяжемся  с вами</p>
          </div>
          <form className={style.mail}>
            <input type="email" name='email'  required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder='Ваша почта' />
            <button>
              написать
            </button>
          </form>
        </div>
      </div>
    </div>


  );
};

export default Mail;