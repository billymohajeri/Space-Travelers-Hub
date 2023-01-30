import '../styles/Navigation.css';
import logo from '../Assets/planet.png';

const Navigation = () => (
  <nav className="navmenu-desktop">
    <img src={logo} alt="logo" className="logo-img" />
    <h1 className="logo">Space Travelers&apos; Hub</h1>
    <ul className="nav-items">
      <li className="nav-item">1</li>
      <li className="nav-item">2</li>
      <li className="nav-item">3</li>
    </ul>
  </nav>
);

export default Navigation;
