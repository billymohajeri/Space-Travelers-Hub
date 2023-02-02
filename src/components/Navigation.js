import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';
import logo from '../Assets/planet.png';

const Navigation = () => (
  <nav className="navmenu-desktop">
    <img src={logo} alt="logo" className="logo-img" />
    <h1 className="logo">Space Travelers&apos; Hub</h1>
    <ul className="nav-items">
      <li className="nav-item">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'activeLink' : 'nonActiveLink')}
        />
      </li>
      <li className="nav-item">
        <NavLink
          to="rockets"
          className={({ isActive }) => (isActive ? 'activeLink' : 'nonActiveLink')}
        >
          Rockets
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="missions"
          end
          className={({ isActive }) => (isActive ? 'activeLink' : 'nonActiveLink')}
        >
          Missions
        </NavLink>
      </li>
      <li className="nav-divider">|</li>
      <li className="nav-item">
        <NavLink
          to="my-profile"
          className={({ isActive }) => (isActive ? 'activeLink' : 'nonActiveLink')}
        >
          My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
