import logo from '../../assets/logo.png';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <a href=''>
        <div className={style.block}>
          <div className={style.logo}>
            <img src={logo} alt='' />
          </div>
          <div className={style.title}>Oompa Loompa's crew</div>
        </div>
      </a>
    </header>
  );
};

export default Header;
