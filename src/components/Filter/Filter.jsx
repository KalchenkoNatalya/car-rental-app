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
  const [selectedBrand, setSelectedValue] = useState('');
  const [selectedPriceFrom, setPriceFrom] = useState('');
  const [selectedPriceTo, setPriceTo] = useState('');
  const [selectedMileageFrom, setMileageFrom] = useState('');
  const [selectedMileageTo, setMileageTo] = useState('');

  const handleSelectedFilter = e => {
    setSelectedValue(e.target.value);
  };
  const handleSearchClick = () => {
    console.log(selectedBrand);
    console.log(selectedPriceFrom);
    console.log(selectedPriceTo);
    console.log(selectedMileageFrom);
    console.log(selectedMileageTo);
    dispatch(fromFilter({selectedBrand, selectedPriceFrom, selectedPriceTo, selectedMileageFrom, selectedMileageTo }));
    // dispatch(fromFilter(selectedValue));
  };
  return (
    <div className={css.filterWrap}>
      <div className={css.selectWrap}>
        <label htmlFor="carMakeDropdown" className={css.label}>
          Car brand{' '}
        </label>
        <select
          id="carMakeDropdown"
          value={selectedBrand}
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
        <div className={css.priceWrap}>
        <label htmlFor="priceFrom" className={css.label}>
          Price from{' '}
        </label>

        <input
          type="text"
          id="priceFrom"
          className={css.input}
          value={selectedPriceFrom}
          onChange={e => setPriceFrom(e.target.value)}
        />
        <label htmlFor="priceTo" className={css.label}>
          Price to{' '}
        </label>
        <input
          type="text"
          id="priceTo"
          className={css.input}
          value={selectedPriceTo}
          onChange={e => setPriceTo(e.target.value)}
        />
      </div>
      <div className={css.mileageWrap}>
        <label htmlFor="mileageFrom" className={css.label}>
          Mileage from{' '}
        </label>
        <input
          type="text"
          id="mileageFrom"
          className={css.input}
          value={selectedMileageFrom}
          onChange={e => setMileageFrom(e.target.value)}
        />
        <label htmlFor="mileageTo" className={css.label}>
          Mileage to{' '}
        </label>
        <input
          type="text"
          id="mileageTo"
          className={css.input}
          value={selectedMileageTo}
          onChange={e => setMileageTo(e.target.value)}
        />
      </div>
      </div>
      <button className={css.button} onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};
