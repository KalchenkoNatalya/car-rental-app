export const filteredCars = (
  dataAllCars,
  makeBrand,
  price,

  mileageFrom,
  mileageTo
) => {
  return dataAllCars?.filter(oneCar => {
    let filterResult = true;
    const carPriceInArray = parseInt(oneCar.rentalPrice.replace(/\D/g, ''), 10);

    if (makeBrand !== '' && makeBrand !== 'Select brand') {
      filterResult = oneCar.make === makeBrand;
    }
    if (price) {
      if (!(carPriceInArray <= price)) {
        filterResult = false;
      }
    }

    if (mileageFrom) {
      if (!(oneCar.mileage >= mileageFrom)) {
        filterResult = false;
      }
    }
    if (mileageTo) {
      if (!(oneCar.mileage <= mileageTo)) {
        filterResult = false;
      }
    }
    if (mileageFrom && mileageTo) {
      if (!(oneCar.mileage >= mileageFrom && oneCar.mileage <= mileageTo)) {
        filterResult = false;
      }
    }

    return filterResult;
  });
};
