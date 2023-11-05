import { CardDetails } from 'components/CardDetails/CardDetails';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import css from './CardOneCar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsFavorite } from 'redux/selectors';
import { addToFavorites, removeFromFavorites } from 'redux/carsAdvertsSlice';
import PropTypes from 'prop-types';

export const CardOneCar = ({ oneCar }) => {
  const {
    id,
    img,
    make,
    address,
    model,
    year,
    type,
    rentalPrice,
    rentalCompany,
    functionalities,
    accessories,
  } = oneCar;

  const parts = address.split(',');
  const city = parts[1].trim();
  const country = parts[2].trim();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const findShortestString = array => {
    return array.reduce((shortest, current) => {
      return current.length < shortest.length ? current : shortest;
    }, array[0]);
  };

  const shortestAccessories = findShortestString(accessories);
  const shortestFunctionalities = findShortestString(functionalities);

  const shortestCharacteristic =
    shortestAccessories.length < shortestFunctionalities.length
      ? shortestAccessories
      : shortestFunctionalities;
  const dispatch = useDispatch();
  const favorites = useSelector(selectIsFavorite);

  const isFavorite = favorites.some(car => car.id === oneCar.id);

  const handleClikIconHeart = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(oneCar));
    } else {
      dispatch(addToFavorites(oneCar));
    }

    const favoritesFromStorage = localStorage.getItem('favorites');
    const parseFavoritesFromStorage = favoritesFromStorage
      ? JSON.parse(favoritesFromStorage)
      : [];

    if (isFavorite) {
      const updateStorage = parseFavoritesFromStorage.filter(
        car => car.id !== oneCar.id
      );
      localStorage.setItem('favorites', JSON.stringify(updateStorage));
    } else {
      const updateStorage = [...parseFavoritesFromStorage, oneCar];
      localStorage.setItem('favorites', JSON.stringify(updateStorage));
    }
    console.log('click on heart');
  };
  return (
    <div className={css.carCard}>
      <div className={css.imageIconWrap}>
        <img src={img} alt={` car ${make} ${model}`} className={css.photoCar} />
        <button className={css.iconButton} onClick={handleClikIconHeart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill={isFavorite ? '#3470FF' : 'none'}
          >
            <path
              d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95402C16.7321 7.45342 16.8388 6.91687 16.8388 6.375C16.8388 5.83313 16.7321 5.29658 16.5247 4.79598C16.3172 4.29539 16.0132 3.84057 15.63 3.4575Z"
              stroke={isFavorite ? '#3470FF' : 'white'}
              strokeOpacity="0.8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className={css.titleWrap}>
        <h2 className={css.titleCard}>
          {`${make} `}
          {(make === 'Volvo' || make === 'Buick') && (
            <span className={css.model}>{model}</span>
          )}
          {`, ${year}`}
        </h2>

        <p className={css.titleCard}>{rentalPrice}</p>
      </div>

      <div className={css.description}>
        <p>{city} </p>
        <p>{country} </p>
        <p>{rentalCompany}</p>
      </div>

      <div className={css.description}>
        <p>{type}</p>
        <p>{model}</p>
        <p>{id}</p>
        <p>{shortestCharacteristic}</p>
      </div>

      <button type="button" onClick={openModal} className={css.button}>
        Learn More
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <CardDetails oneCar={oneCar} onClose={closeModal} />
      </Modal>
    </div>
  );
};



CardOneCar.propTypes = {
  oneCar: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};