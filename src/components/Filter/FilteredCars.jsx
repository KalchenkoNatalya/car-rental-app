// import { useSelector } from 'react-redux';
// import {
//   selectMakeBrand,
//   selectMileageFrom,
//   selectMileageTo,
//   selectPriceFrom,
//   selectPriceTo,
// } from 'redux/selectors';

// const dataAllCars = useSelector(selectCarsAdverts);
// const makeBrand = useSelector(selectMakeBrand);
// const priceFrom = useSelector(selectPriceFrom);
// const priceTo = useSelector(selectPriceTo);
// const mileageFrom = useSelector(selectMileageFrom);
// const mileageTo = useSelector(selectMileageTo);

export const filteredCars = (
  dataAllCars,
  makeBrand,
  priceFrom,
  priceTo,
  mileageFrom,
  mileageTo
) => {
  return dataAllCars?.filter(oneCar => {
    const brandFiltered = makeBrand === '' || oneCar.make === makeBrand;
    const carPriceInArray = parseInt(oneCar.rentalPrice.replace(/\D/g, ''), 10);
    const priceFromFiltered = priceFrom === '' || carPriceInArray >= priceFrom;
    const priceToFiltered = priceTo === '' || carPriceInArray <= priceTo;
    const priceFromToFiltered =
      priceFrom &&
      priceTo &&
      carPriceInArray >= priceFrom &&
      carPriceInArray <= priceTo;
    const mileageFromFiltered = mileageFrom === "" || oneCar.mileage
    return brandFiltered && priceFromFiltered && priceToFiltered && priceFromToFiltered;
  });
};
