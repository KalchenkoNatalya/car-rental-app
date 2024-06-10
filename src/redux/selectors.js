export const selectCarsAdverts = state =>
  state.carsAdvertsState.dataCarsAdverts;
export const selectIsLoading = state => state.carsAdvertsState.isLoading;
export const selectError = state => state.carsAdvertsState.error;
export const selectMakeBrand = state => state.carsAdvertsState.makeBrand;
export const selectIsFavorite = state => state.carsAdvertsState.favorites;
export const selectPrice = state => state.carsAdvertsState.price;
export const selectMileageFrom = state => state.carsAdvertsState.mileageFrom;
export const selectMileageTo = state => state.carsAdvertsState.mileageTo;
export const selectOnFilter= state => state.carsAdvertsState.onFilter;
export const selectPage= state => state.carsAdvertsState.page;
