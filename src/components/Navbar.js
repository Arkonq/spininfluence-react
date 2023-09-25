import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <nav className="header__body">
        <Link to='/'>
          <div className="header__logo">
            <img src="img/icons/logo.png" alt="" />
            <span>Spinfluence</span>
          </div>
        </Link>
        <nav className="header__menu">
          <ul className="header__list">
            <li className="header__link header__link_active">
              <Link to='/'>Home</Link>
            </li>
            <li className="header__link">
              <Link to='/service'>Service</Link>
            </li>
            <li className="header__link">
              <Link to='/about'>About</Link>
            </li>
            <li className="header__link">
              <Link to='/contact'>Contact</Link>              
            </li>
            <li className="header__link">
              <Link to={Math.random().toString()}>Random</Link>              
            </li>
          </ul>
        </nav>
        <div className="header__login">
          <Link to='/login'>Login</Link>
          <div className="header__burger">
            <img src="img/icons/burger.png" alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;