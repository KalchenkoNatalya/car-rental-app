import { createSelector } from "@reduxjs/toolkit";

export const selectCarsAdverts = state =>
  state.carsAdvertsSlise.dataCarsAdverts;
export const selectIsLoading = state => state.carsAdvertsState.isLoading;
export const selectError = state => state.carsAdvertsState.error;
export const selectFilteredCarsAdverts = state => state.carsAdvertsState.filter;


export const selectVisibleCarsAdverts = createSelector(
  [selectCarsAdverts, selectFilteredCarsAdverts],
  (dataCarsAdverts, filter) => {
    if (!filter) {
      return dataCarsAdverts; 
    }
    return dataCarsAdverts.filter(carsAdvert =>
      carsAdvert.make.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
