import './navbar.css';
import CartWidget from './CartWidget';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaHouse } from 'react-icons/fa6';
import { GiClothes } from "react-icons/gi";
import { FaLaptop } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <img src={logo} alt="logo ecoshop" />
      </Link>

      <ul className="categories">
        <Link to="/categoria/electronics" className="category">
          <p>Electronica</p>
          <div className="img-category">
            <FaLaptop size={40} />
          </div>
        </Link>

        <Link to="/categoria/home" className="category">
          <p>Hogar</p>
          <div className="img-category">
            <FaHouse size={40} />
          </div>
        </Link>

        <Link to="/categoria/clothing" className="category">
          <p>Ropa</p>
          <div className="img-category">
            <GiClothes size={40} />
          </div>
        </Link>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
