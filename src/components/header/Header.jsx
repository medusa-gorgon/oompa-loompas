import logo from '../../assets/logo.png';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetProfile } from '../../redux/profileSlice';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <NavLink to='/' onClick={() => dispatch(resetProfile())}>
      <header className={style.header}>
        <div className={style.block}>
          <div className={style.logo}>
            <img src={logo} alt='logo' />
          </div>
          <div className={style.title}>Oompa Loompa's crew</div>
        </div>
      </header>
    </NavLink>
  );
};

export default Header;
