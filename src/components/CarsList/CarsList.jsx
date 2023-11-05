import { CardOneCar } from 'components/CardOneCar/CardOneCar';
import css from './CarsList.module.css';
import PropTypes from 'prop-types';

export const CarsList = ({ cars }) => {
  return (
    <ul className={css.listCar}>
      {cars.map(car => (
        <li key={car.id}>
          <CardOneCar oneCar={car} />
        </li>
      ))}
    </ul>
  );
};


CarsList.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      make: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      rentalPrice: PropTypes.string.isRequired,
      functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
      accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};