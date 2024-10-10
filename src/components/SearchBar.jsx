import { Link } from "react-router-dom";
import './SearchBar.scss'; 
import logo from '/img/logo-integrador-3.webp';  // Ruta de la imagen del logo
import carrito from '/img/carrito.webp';  // Ruta de la imagen del carrito

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-bar__logo-container">
        <img src={logo} alt="Logo Relojes de Colección" />
      </div>
      <form action="#" className="search-bar__form-container">
        <label htmlFor="busqueda" className="search-bar__form-label">Buscar</label>
        <input
          type="search"
          className="search-bar__form-search"
          id="busqueda"
        />
        <input
          type="submit"
          className="search-bar__form-submit"
          value="Buscar"
        />
      </form>
      <div className="search-bar__carrito-container">
        <Link to="carrito">
          <img src={carrito} alt="Carrito de compras" />
        </Link>
      </div>
      <div className="menu-toogle">
        <label htmlFor="menu" className="menu-toogle__label">
          <span className="menu-toogle__top-bread"></span>
          <span className="menu-toogle__meat"></span>
          <span className="menu-toogle__bottom-bread"></span>
        </label>
      </div>
    </div>
  );
};

export default SearchBar;