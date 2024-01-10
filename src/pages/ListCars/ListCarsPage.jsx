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
  fetchAllCarsThunk,
  fetchFilterCarsAdvertsThunk,
} from 'redux/operations';
import {
  selectCarsAdverts,
  selectError,
  // selectMakeBrand,
  selectIsLoading,
  selectOnFilter,
  // selectPriceFrom,
  // selectPriceTo,
  // selectMileageFrom,
  // selectMileageTo,
} from 'redux/selectors';
import css from './ListCarsPage.module.css';

export const ListCarsPage = () => {
  const dataAllCars = useSelector(selectCarsAdverts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  // const makeBrand = useSelector(selectMakeBrand);
  // const priceFrom = useSelector(selectPriceFrom);
  // const priceTo = useSelector(selectPriceTo);
  // const mileageFrom = useSelector(selectMileageFrom);
  // const mileageTo = useSelector(selectMileageTo);

  const onFilter = useSelector(selectOnFilter);

  const dispatch = useDispatch();
  const page = useSelector(state => state.carsAdvertsState.page);

  useEffect(() => {
    dispatch(fetchAllCarsThunk());
    const favoritesFromStorage = localStorage.getItem('favorites');
    const parseFavoritesFromStorage = favoritesFromStorage
      ? JSON.parse(favoritesFromStorage)
      : [];

    dispatch(updateFavoritesFromStorage(parseFavoritesFromStorage));
  }, [dispatch, page]);

  // useEffect(() => {
  //   if (makeBrand === '') {
  //     dispatch(fetchAllCarsThunk());
  //   } else dispatch(fetchFilterCarsAdvertsThunk());
  // }, [dispatch, makeBrand]);

  useEffect(() => {
    if (!onFilter) {
      dispatch(fetchAllCarsThunk());
    } else dispatch(fetchFilterCarsAdvertsThunk());
  }, [dispatch, onFilter]);

  const loadMore = () => {
    dispatch(pagePaginations());
  };

  return (
    <section className={css.section}>
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}

      <Filter />

      <CarsList cars={dataAllCars} />

      {dataAllCars.length === 12 && (
        <button onClick={loadMore} className={css.button}>
          Load More
        </button>
      )}
    </section>
  );
};
