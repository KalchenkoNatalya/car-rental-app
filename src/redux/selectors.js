export const selectCarsAdverts = state =>
  state.carsAdvertsState.dataCarsAdverts;
export const selectIsLoading = state => state.carsAdvertsState.isLoading;
export const selectError = state => state.carsAdvertsState.error;
export const selectMakeBrand = state => state.carsAdvertsState.makeBrand;
export const selectIsFavorite = state => state.carsAdvertsState.favorites;
export const selectPriceFrom = state => state.carsAdvertsState.priceFrom;
export const selectPriceTo = state => state.carsAdvertsState.priceTo;
export const selectMileageFrom = state => state.carsAdvertsState.mileageFrom;
export const selectMileageTo = state => state.carsAdvertsState.mileageTo;
export const selectOnFilter= state => state.carsAdvertsState.onFilter;
