import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { fromFilter } from 'redux/carsAdvertsSlice';
import { useState } from 'react';

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
export const Filter = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectedFilter = e => {
    setSelectedValue(e.target.value);
  };
  const handleSearchClick = () => {
    dispatch(fromFilter(selectedValue));
  };
  return (
    <div className={css.filterWrap}>
      <div className={css.selectWrap}>
        <label htmlFor="carMakeDropdown" className={css.label}>
          Car brand{' '}
        </label>
        <select
          id="carMakeDropdown"
          value={selectedValue}
          className={css.filterSelect}
          onChange={handleSelectedFilter}
        >
          <option value="">Select brand</option>
          {carMakes.map(make => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
      </div>
      <button className={css.button} onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};
