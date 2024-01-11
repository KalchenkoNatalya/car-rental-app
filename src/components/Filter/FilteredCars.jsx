// export const filteredCars = (
//   dataAllCars,
//   makeBrand,
//   priceFrom,
//   priceTo,
//   mileageFrom,
//   mileageTo
// ) => {
//   return dataAllCars?.filter(oneCar => {
//     const brandFiltered = !makeBrand || oneCar.make === makeBrand;
//     // console.log("brandFiltered:", brandFiltered);

//     const carPriceInArray = parseInt(oneCar.rentalPrice.replace(/\D/g, ''), 10);
//     const priceFromFiltered = priceFrom === '' || carPriceInArray >= priceFrom;
//     // console.log("priceFromFiltered:", priceFromFiltered);

//     const priceToFiltered = priceTo === '' || carPriceInArray <= priceTo;
//     // console.log("priceToFiltered:", priceToFiltered);

//     const priceFromToFiltered =
//       priceFrom &&
//       priceTo &&
//       carPriceInArray >= priceFrom &&
//       carPriceInArray <= priceTo;
//     // console.log("priceFromToFiltered:", priceFromToFiltered);

//     const mileageFromFiltered =
//       mileageFrom === '' || oneCar.mileage >= mileageFrom;
//     // console.log("mileageFromFiltered:", mileageFromFiltered);

//     const mileageToFiltered = mileageFrom === '' || oneCar.mileage <= mileageTo;
//     // console.log("mileageToFiltered:", mileageToFiltered);

//     const mileageFromToFiltered =
//       mileageFrom &&
//       mileageTo &&
//       oneCar.mileage >= mileageFrom &&
//       oneCar.mileage <= mileageTo;
//     // console.log("mileageFromToFiltered:", mileageFromToFiltered);

//     // Повертає true, якщо всі умови задовольняються
//     return (
//       brandFiltered &&
//       priceFromFiltered && priceToFiltered && priceFromToFiltered &&
//       mileageFromFiltered && mileageToFiltered && mileageFromToFiltered
//     );
//   });
// };

// export const filteredCars = (
//   dataAllCars,
//   makeBrand,
//   priceFrom,
//   priceTo,
//   mileageFrom,
//   mileageTo
// ) => {
//   return dataAllCars?.filter(oneCar => {
//     let filterResalt = true;
//     const carPriceInArray = parseInt(oneCar.rentalPrice.replace(/\D/g, ''), 10);
//     if (makeBrand) {
//       filterResalt = oneCar.make === makeBrand;
//     }
//     if (priceFrom) {
//       filterResalt = carPriceInArray >= priceFrom;
//     }
//     if (priceTo) {
//       filterResalt = carPriceInArray <= priceTo;
//     }
//     if (priceFrom && priceTo) {
//       filterResalt = carPriceInArray >= priceFrom && carPriceInArray <= priceTo;
//     }
//     if (mileageFrom) {
//       filterResalt = oneCar.mileage >= mileageFrom;
//     }
//     if (mileageTo) filterResalt = oneCar.mileage <= mileageTo;
//     if (mileageFrom && mileageTo) {
//       filterResalt =
//         oneCar.mileage >= mileageFrom && oneCar.mileage <= mileageTo;
//     }

//     return filterResalt;
//   });
// };

export const filteredCars = (
  dataAllCars,
  makeBrand,
  priceFrom,
  priceTo,
  mileageFrom,
  mileageTo
) => {
  return dataAllCars?.filter(oneCar => {
    let filterResalt = true;
    const carPriceInArray = parseInt(oneCar.rentalPrice.replace(/\D/g, ''), 10);
    if (makeBrand) {
      filterResalt = oneCar.make === makeBrand;
    }
    if (priceFrom) {
      if (!(carPriceInArray >= priceFrom)) {
        filterResalt = false;
      }
    }
    if (priceTo) {
      if (!(carPriceInArray <= priceTo)) {
        filterResalt = false;
      }
    }
    if (priceFrom && priceTo) {
      if (!(carPriceInArray >= priceFrom && carPriceInArray <= priceTo)) {
        filterResalt = false;
      }
    }

    if (mileageFrom) {
      if (!(oneCar.mileage >= mileageFrom)) {
        filterResalt = false;
      }
    }
    if (mileageTo) {
      if (!(oneCar.mileage <= mileageTo)) {
        filterResalt = false;
      }
    }
    if (mileageFrom && mileageTo) {
      if (!(oneCar.mileage >= mileageFrom && oneCar.mileage <= mileageTo)) {
        filterResalt = false;
      }
    }

    return filterResalt;
  });
};
