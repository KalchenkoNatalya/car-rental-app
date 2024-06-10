import FavoritePage from 'pages/Favorite/FavoritePage';
import HomePage from 'pages/Home/HomePage';
import { ListCarsPage } from 'pages/ListCars/ListCarsPage';
import { NavLink, Route, Routes } from 'react-router-dom';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.app}>
      <header>
        <nav>
          <ul className={`${css.navList} ${css.container}`}>
            <li>
              <NavLink to="/" className={css.navLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" className={css.navLink}>
                Car's catalog
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorite" className={css.navLink}>
                Favorite cars
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={css.container}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<ListCarsPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <footer className={css.footer}>
        <h2>Contact Us</h2>
        <p className={css.container}>
          If you have any questions or need assistance, please contact us at:
        </p>
        <p>
          Email: <a href="mailto:info@carrental.com">info@carrental.com</a>
        </p>
        <p>
          Phone: <a href="tel:+380730000000">+380730000000</a>
        </p>
      </footer>
    </div>
  );
};
