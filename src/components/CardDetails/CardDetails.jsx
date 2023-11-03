import React from 'react';
import css from "./CardDetails.module.css"

export const CardDetails = ({ oneCar }) => {
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
    <div className="car-card">
      <img src={img} alt={` car ${make} ${model}`} className={css.imgDetails} />
      <h2>{`${make} ${model}, ${year}`}</h2>
      <p>${rentalPrice}</p>
      <p> {city}</p>
      <p>| {country} </p>
      <p>| id: {id}</p>
      <p>| Year: {year}</p>
      <p>| Type: {type}</p>
      <p> FuelConsumption: {fuelConsumption}</p>
      <p>| EngineSize: {engineSize}</p>
      <p> {description}</p>
      <p> Accessories and functionalities: </p>
      {/* <p> {accessories[0]}</p>
      <p> {accessories[1]}</p>
      <p> {accessories[2]}</p> */}
      {/* {accessories.map(accessory => <p>{accessory}</p>)} */}

      {accessories.map((accessory, index) => (
        <React.Fragment key={index}>
          <p>{accessory}</p>
          {index < accessories.length - 1 && <span>|</span>}
        </React.Fragment>
      ))}
      <p> {functionalities[0]}</p>
      <p>| {functionalities[1]}</p>
      <p>| {functionalities[2]}</p>
      <p> Rental Conditions: </p>
      <p>
        {' '}
        {minimumAge}: <span>{minimumAgeNumber}</span>
      </p>
      <p> {secondRentalCondition}</p>
      <p> {thirdRentalCondition}</p>

      <p>Mileage: {mileage.toLocaleString('en-US')}</p>
      <p>Price: {rentalPriceFormat}</p>
      <a href="tel:+380730000000">Rental car</a>
    </div>
  );
};
