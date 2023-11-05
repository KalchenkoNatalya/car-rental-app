import { CardOneCar } from 'components/CardOneCar/CardOneCar';
import css from './CarsList.module.css';

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
