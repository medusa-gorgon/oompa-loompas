import logo from '../../assets/logo.png';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={style.header}>
      <NavLink to='/' className={style.link}>
        <div className={style.block}>
          <div className={style.logo}>
            <img src={logo} alt='logo' />
          </div>
          <div className={style.title}>Oompa Loompa's crew</div>
        </div>
      </NavLink>
    </header>
  );
};

export default Header;
