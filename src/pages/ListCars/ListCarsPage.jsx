import { CarsList } from 'components/CarsList/CarsList';
import { Filter } from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  pagePaginations,
  updateFavoritesFromStorage,
} from 'redux/carsAdvertsSlice';
import {
  fetchAllCarsThunkLimit,
  fetchAllCarsThunkWithoutLimit,
} from 'redux/operations';
import {
  selectCarsAdverts,
  selectError,
  selectMakeBrand,
  selectIsLoading,
  selectOnFilter,
  selectMileageFrom,
  selectMileageTo,
  selectPage,
  selectPrice,
} from 'redux/selectors';
import { filteredCars } from 'components/Filter/FilteredCars';
import css from './ListCarsPage.module.css';

export const ListCarsPage = () => {
  const dataAllCars = useSelector(selectCarsAdverts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const makeBrand = useSelector(selectMakeBrand);
  const price = useSelector(selectPrice);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);
  const onFilter = useSelector(selectOnFilter);
  const page = useSelector(selectPage);

  const filteredCarsList = filteredCars(
    dataAllCars,
    makeBrand,
    price,
    mileageFrom,
    mileageTo
  );
  console.log('filteredCarsList:', filteredCarsList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCarsThunkLimit());
    const favoritesFromStorage = localStorage.getItem('favorites');
    const parseFavoritesFromStorage = favoritesFromStorage
      ? JSON.parse(favoritesFromStorage)
      : [];

    dispatch(updateFavoritesFromStorage(parseFavoritesFromStorage));
  }, [dispatch, page]);

  useEffect(() => {
    if (!onFilter) {
      dispatch(fetchAllCarsThunkLimit());
    } else dispatch(fetchAllCarsThunkWithoutLimit());
  }, [dispatch, onFilter]);

  const loadMore = () => {
    dispatch(pagePaginations());
  };
  return (
    <section className={css.section}>
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
      <Filter />
      {!onFilter ? (
        <CarsList cars={dataAllCars} />
      ) : (
        <CarsList cars={filteredCarsList} />
      )}
      {filteredCarsList.length === 0 && (
        <p>Oops, nothing found, try searching again</p>
      )}

      {dataAllCars.length === 12 && (
        <button onClick={loadMore} className={css.button}>
          Load More
        </button>
      )}
    </section>
  );
};
