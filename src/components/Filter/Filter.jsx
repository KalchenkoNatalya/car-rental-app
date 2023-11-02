import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { fromFilter } from 'redux/carsAdvertsSlice';
// import { fromFilter } from '../../redux/carsAdvertsSlice';

const carMakes = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Chrysler',
  'Kia',
  'Land',
  'Tesla',
];
export const Filter = ({ selectedMake }) => {
  const dispatch = useDispatch();
  const handleSelectedFilter = event => {
    dispatch(fromFilter(event.target.value));
  };
  return (
    <div>
      <label htmlFor="carMakeDropdown">Select Car Make: </label>
      <select
        id="carMakeDropdown"
        value={selectedMake}
        className={css.filterSelect}
        onChange={handleSelectedFilter}
      >
        <option value="">All Makes</option>
        {carMakes.map(make => (
          <option key={make} value={make}>
            {make}
          </option>
        ))}
      </select>
    </div>
    // <select
    //   value={selectedMake}
    //   className={css.filterSelect}
    //   onChange={selectedFilter}
    // >
    //   <option value="">All Makes</option>
    //   <option value="Toyota">Toyota</option>
    //   <option value="Honda">Honda</option>
    // </select>
  );
};

Filter.propTypes = {
  selectedMake: PropTypes.string,
};
