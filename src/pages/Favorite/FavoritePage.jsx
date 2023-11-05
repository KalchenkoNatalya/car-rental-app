import { CarsList } from 'components/CarsList/CarsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFavoritesFromStorage } from 'redux/carsAdvertsSlice';
import { selectIsFavorite } from 'redux/selectors';

const FavoritePage = () => {
  const dispatch = useDispatch();
  const favorite = useSelector(selectIsFavorite);

  useEffect(() => {
    const favoritesFromStorage = localStorage.getItem('favorites');
    const parseFavoritesFromStorage = favoritesFromStorage
      ? JSON.parse(favoritesFromStorage)
      : [];

    dispatch(updateFavoritesFromStorage(parseFavoritesFromStorage));
  }, [dispatch]);

  useEffect(() => {
    const updatedFavoritesFromStorage = localStorage.getItem('favorites');
    const parsedUpdatedFavoritesFromStorage = updatedFavoritesFromStorage
      ? JSON.parse(updatedFavoritesFromStorage)
      : [];

    if (parsedUpdatedFavoritesFromStorage.length < favorite.length) {
      dispatch(updateFavoritesFromStorage(parsedUpdatedFavoritesFromStorage));
    }
  }, [favorite, dispatch]);

  return (
    <div>
      <CarsList cars={favorite} />
    </div>
  );
};

export default FavoritePage;
