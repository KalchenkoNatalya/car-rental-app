export const selectCarsAdverts = state =>
  state.carsAdvertsState.dataCarsAdverts;
export const selectIsLoading = state => state.carsAdvertsState.isLoading;
export const selectError = state => state.carsAdvertsState.error;
export const selectFilteredCarsAdverts = state => state.carsAdvertsState.filter;
export const selectIsFavorite = state => state.carsAdvertsState.favorites;
