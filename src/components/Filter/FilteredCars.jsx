export const filteredCars = (
  dataAllCars,
  makeBrand,
  price,
  // priceFrom,
  // priceTo,
  mileageFrom,
  mileageTo
) => {
  return dataAllCars?.filter(oneCar => {
    let filterResult = true;
    const carPriceInArray = parseInt(oneCar.rentalPrice.replace(/\D/g, ''), 10);
    if (makeBrand) {
      filterResult = oneCar.make === makeBrand;
    }
    if (price) {
      if (!(carPriceInArray<= price)) {
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

    return filterResult;
  });
};

// export const filteredCars = (
//   dataAllCars,
//   makeBrand,
//   priceFrom,
//   priceTo,
//   mileageFrom,
//   mileageTo
// ) => {
//   return dataAllCars?.filter(oneCar => {
//     let filterResult = false;
//     const carPriceInArray = parseInt(oneCar.rentalPrice.replace(/\D/g, ''), 10);
//     if (makeBrand) {
//       filterResult = oneCar.make === makeBrand;
//     }
//     if (priceFrom) {
//       if (carPriceInArray >= priceFrom) {
//         filterResult = true;
//       }
//     }
//     if (priceTo) {
//       if (carPriceInArray <= priceTo) {
//         filterResult = true;
//       }
//     }
//     if (priceFrom && priceTo) {
//       if (carPriceInArray >= priceFrom && carPriceInArray <= priceTo) {
//         filterResult = true;
//       }
//     }

//     if (mileageFrom) {
//       if (oneCar.mileage >= mileageFrom) {
//         filterResult = true;
//       }
//     }
//     if (mileageTo) {
//       if (oneCar.mileage <= mileageTo) {
//         filterResult = true;
//       }
//     }
//     if (mileageFrom && mileageTo) {
//       if (oneCar.mileage >= mileageFrom && oneCar.mileage <= mileageTo) {
//         filterResult = true;
//       }
//     }

//     return filterResult;
//   });
// };
