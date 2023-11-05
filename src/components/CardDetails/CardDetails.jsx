import React from 'react';
import css from './CardDetails.module.css';
import PropTypes from 'prop-types';
export const CardDetails = ({ oneCar, onClose }) => {
  const {
    id,
    img,
    make,
    address,
    model,
    year,
    type,
    rentalPrice,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
    mileage,
  } = oneCar;

  const partsAddress = address.split(',');
  const city = partsAddress[1].trim();
  const country = partsAddress[2].trim();

  const partRentalConditions = rentalConditions.split('\n');
  const minAgeConditions = partRentalConditions[0].split(':');
  const minimumAge = minAgeConditions[0];
  const minimumAgeNumber = minAgeConditions[1];
  const secondRentalCondition = partRentalConditions[1];
  const thirdRentalCondition = partRentalConditions[2];

  const rentalPriceFormat = rentalPrice.replace('$', '') + '$';

  return (
    <div className={css.cardDetailsWrap}>
      <button className={css.closeButton} onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18 6L6 18"
            stroke="#121417"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="#121417"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <img src={img} alt={` car ${make} ${model}`} className={css.imgDetails} />
      <div className={css.titleWrap}>
        <h2 className={css.titleCard}>
          {`${make} `}
          {(make === 'Volvo' || make === 'Buick') && (
            <span className={css.model}>{model}</span>
          )}
          {`, ${year}`}
        </h2>
        <p className={css.titleCard}>{rentalPrice}</p>
      </div>
      <div className={css.description}>
        <p> {city}</p>
        <p>{country} </p>
        <p>id: {id}</p>
        <p>Year: {year}</p>
        <p>Type: {type}</p>
      </div>

      <div className={css.description}>
        <p> FuelConsumption: {fuelConsumption}</p>
        <p> EngineSize: {engineSize}</p>
      </div>

      <p className={css.detailedDescription}> {description}</p>
      <p className={css.titleAccessoriesFunctionalities}>
        {' '}
        Accessories and functionalities:{' '}
      </p>

      <div className={css.description}>
        <p> {accessories[0]}</p>
        <p> {accessories[1]}</p>
        <p> {accessories[2]}</p>
      </div>
      <div className={css.description}>
        <p> {functionalities[0]}</p>
        <p> {functionalities[1]}</p>
        <p> {functionalities[2]}</p>
      </div>

      <p className={css.titleAccessoriesFunctionalities}>
        {' '}
        Rental Conditions:{' '}
      </p>

      <div className={css.itemConditionWrap}>
        <p className={css.itemCondition}>
          {minimumAge}:{' '}
          <span className={css.itemConditionSpan}>{minimumAgeNumber}</span>
        </p>
        <p className={css.itemCondition}> {secondRentalCondition}</p>
      </div>

      <div className={css.itemConditionWrap}>
        <p className={css.itemCondition}> {thirdRentalCondition}</p>
        <p className={css.itemCondition}>
          Mileage:{' '}
          <span className={css.itemConditionSpan}>
            {mileage.toLocaleString('en-US')}
          </span>
        </p>
        <p className={css.itemCondition}>
          Price:{' '}
          <span className={css.itemConditionSpan}>{rentalPriceFormat}</span>
        </p>
      </div>

      <a className={css.rentalButton} href="tel:+380730000000">
        Rental car
      </a>
    </div>
  );
};

CardDetails.propTypes = {
  oneCar: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
    fuelConsumption: PropTypes.string.isRequired,
    engineSize: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
    rentalConditions: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};