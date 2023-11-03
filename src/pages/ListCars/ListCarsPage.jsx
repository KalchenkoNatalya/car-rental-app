import { CarsList } from 'components/CarsList/CarsList';
import { Filter } from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pagePaginations } from 'redux/carsAdvertsSlice';
import { fetchCarsAdvertsThunk } from 'redux/operations';
import {
  selectCarsAdverts,
  selectError,
  selectFilteredCarsAdverts,
  selectIsLoading,
  selectVisibleCarsAdverts,
} from 'redux/selectors';

export const ListCarsPage = () => {
  const dataAllCars = useSelector(selectCarsAdverts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilteredCarsAdverts);
  const filteredCarsAdverts = useSelector(selectVisibleCarsAdverts);
  const dispatch = useDispatch();
  const page = useSelector(state => state.carsAdvertsState.page)

  useEffect(() => {
    dispatch(fetchCarsAdvertsThunk());
    
  }, [dispatch, page ]);

  const loadMore  = () => {
    dispatch(pagePaginations())
    console.log('натиснули лоад мор');
  };
  return (
    <section>
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}

      <Filter selectedFilter={filter} />

      {filter === '' ? (
        <CarsList cars={dataAllCars} />
      ) : (
        <CarsList cars={filteredCarsAdverts} />
      )}

       {dataAllCars.length === 12 && (
      <button onClick={loadMore}>Load More</button>
    )}
    </section>
  );
};
