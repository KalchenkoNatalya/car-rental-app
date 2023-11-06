import React from 'react';
import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
const HomePage = () => {
  return (
    <div>
      <section className={css.sectionHomePage}>
        <div className={css.titleWrap}>
          <div>
            <h1 className={css.title}>
              NEED <br /> A RENT CAR?
            </h1>
          </div>

          <div className={css.photoWrap}>
            <img
              className={css.photo}
              src="https://res.cloudinary.com/daqddzmhs/image/upload/v1699194511/Cars/rental_photo_tyfkk7.webp"
              alt="Rental car"
            />

            <p className={css.price}>
              at <br />
              $25/day
            </p>
          </div>
        </div>

        <p className={css.text}>
          Our cars are for your needs, <br />
          <span>
            {' '}
            <NavLink to="/catalog" className={css.catalogLink}>
              go to the catalog
            </NavLink>
          </span>{' '}
          to choose{' '}
        </p>
      </section>
    </div>
  );
};

export default HomePage;
