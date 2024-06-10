import React from 'react';
import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
import 'animate.css';

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

            <p
              className={`${
                css.price
              } ${'animate__animated animate__repeat-3 animate__slower 5s animate__zoomIn'}`}
            >
              at <br />
              $25/day
            </p>
          </div>
        </div>

        <p className={css.text}>
          Our cars are for your needs, <br />
          <span>
            {' '}
            <NavLink
              to="/catalog"
              className={`${
                css.catalogLink
              } ${'animate__animated animate__flash animate__slower 5s'}`}
            >
              go to the catalog
            </NavLink>
          </span>{' '}
          to choose{' '}
        </p>
        <div className={css.familyWrap}>
          <p
            className={`${'animate__animated animate__slideInLeft'} ${
              css.textForNeed
            }`}
          >
            For family vacations
          </p>
          <img
            className={`${
              css.photo
            } ${'animate__animated animate__slideInRight animate__repeat-3 animate__slow 5s '} ${
              css.photoFamily
            }`}
            src="https://res.cloudinary.com/daqddzmhs/image/upload/v1699269674/Travelling_uxey6w.jpg"
            alt="Rental car"
          />
        </div>
        <div className={css.dateWrap}>
          <p
            className={`${'animate__animated animate__slideInRight'} ${
              css.textForNeed
            }`}
          >
            Romantic date
          </p>
          <img
            className={` ${
              css.photoDate
            } ${'animate__animated animate__slideInLeft animate__repeat-3 animate__slow	5s '} `}
            src="https://res.cloudinary.com/daqddzmhs/image/upload/v1711373271/Know-how-to-organize-a-proper-long-drive-date_g165a6.jpg"
            alt="Rental car"
          />
        </div>

        <div className={css.familyWrap}>
          <p
            className={`${'animate__animated animate__slideInLeft'} ${
              css.textForNeed
            }`}
          >
            Business meeting
          </p>
          <img
            className={`${
              css.photo
            } ${'animate__animated animate__slideInRight animate__repeat-3 animate__slow	5s '} ${
              css.photoFamily
            }`}
            src="https://res.cloudinary.com/daqddzmhs/image/upload/v1699269920/for_business_meetings_ffyx5n.jpg"
            alt="Rental car"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
