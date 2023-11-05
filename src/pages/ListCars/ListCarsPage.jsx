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
  fetchCarsAdvertsThunk,
  fetchFilterCarsAdvertsThunk,
} from 'redux/operations';
import {
  selectCarsAdverts,
  selectError,
  selectFilteredCarsAdverts,
  selectIsLoading,
} from 'redux/selectors';
import css from './ListCarsPage.module.css';

export const ListCarsPage = () => {
  const dataAllCars = useSelector(selectCarsAdverts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilteredCarsAdverts);
  const dispatch = useDispatch();
  const page = useSelector(state => state.carsAdvertsState.page);

  useEffect(() => {
    dispatch(fetchCarsAdvertsThunk());
    const favoritesFromStorage = localStorage.getItem('favorites');
    const parseFavoritesFromStorage = favoritesFromStorage
      ? JSON.parse(favoritesFromStorage)
      : [];

    dispatch(updateFavoritesFromStorage(parseFavoritesFromStorage));
  }, [dispatch, page]);

  useEffect(() => {
    if (filter === '') {
      dispatch(fetchCarsAdvertsThunk());
    } else dispatch(fetchFilterCarsAdvertsThunk());
  }, [dispatch, filter]);

  const loadMore = () => {
    dispatch(pagePaginations());
    console.log('натиснули лоад мор');
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
