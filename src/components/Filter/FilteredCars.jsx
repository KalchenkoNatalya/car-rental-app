export const filteredCars = (
  dataAllCars,
  makeBrand,
  price,
  // priceFrom,
  // priceTo,
  mileageFrom,
  mileageTo
) => {

  return   dataAllCars?.filter(oneCar => {
    let filterResult = true;
    const carPriceInArray = parseInt(oneCar.rentalPrice.replace(/\D/g, ''), 10);
    // if (makeBrand) {
    //   filterResult = oneCar.make === makeBrand;
    // }
    if (makeBrand !== '' && makeBrand !== 'Select brand') {
      filterResult = oneCar.make === makeBrand;
    }
    if (price) {
      if (!(carPriceInArray <= price)) {
        filterResult = false;
      }
    }
    // if (priceFrom) {
    //   if (!(carPriceInArray >= priceFrom)) {
    //     filterResult = false;
    //   }
    // }
    // if (priceTo) {
    //   if (!(carPriceInArray <= priceTo)) {
    //     filterResult = false;
    //   }
    // }
    // if (priceFrom && priceTo) {
    //   if (!(carPriceInArray >= priceFrom && carPriceInArray <= priceTo)) {
    //     filterResult = false;
    //   }
    // }

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
    // console.log(filterResult);
    //  console.log(dataAllCars);
    return filterResult;
   
  });
};


console.log(filteredCars);
