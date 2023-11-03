import { CardOneCar } from 'components/CardOneCar/CardOneCar';
// import { useSelector } from 'react-redux';
// import { selectCarsAdverts } from 'redux/selectors';

export const CarsList = ({cars}) => {
  // const dataAllCars = useSelector(
  //   state => state.carsAdvertsState.dataCarsAdverts
  // );
  // const dataAllCars = useSelector(selectCarsAdverts);
  // console.log(cars);
  return (
    <ul>
      {cars.map(car => (
        <li key={car.id}>
          <CardOneCar oneCar={car} />
        </li>
      ))}
    </ul>
  );
};
