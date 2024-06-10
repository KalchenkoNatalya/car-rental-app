import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { fromFilter, updatePageToFirst } from 'redux/carsAdvertsSlice';
import { useState } from 'react';
import ReactInputMask from 'react-input-mask';
import iconDown from '../iconDown.svg';
import iconUp from '../iconUp.svg';
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
  'Land Rover',
  'Tesla',
];

const carPrice = [
  30, 40, 50, 60, 70, 80, 90, 100, 120, 150, 200, 250, 300, 400, 500,
];

export const Filter = () => {
  const dispatch = useDispatch();
  const [selectedBrand, setSelectedValue] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedMileageFrom, setMileageFrom] = useState('');
  const [selectedMileageTo, setMileageTo] = useState('');
  const [isOpenSelectBrand, setOpenSelectBrand] = useState(false);
  const [isOpenSelectedPrice, setIsOpenSelectPrice] = useState(false);
  console.log('isOpenSelectBrand', isOpenSelectBrand);
  console.log('isOpenSelectedPrice', isOpenSelectedPrice);

  const handleOpenSelectedBrand = e => {
    setOpenSelectBrand(prev => !prev);
  };
  const handleOpenSelectedPrice = e => {
    setIsOpenSelectPrice(prev => !prev);
  };

  const openSelectBrand = e => {
    e.preventDefault();
    if (isOpenSelectBrand) {
      closeSelectBrand();
    } else {
      setOpenSelectBrand(true);
      //показуємо випадаючий список
      const carMakeDropdown = document.getElementById('carMakeDropdown');
      carMakeDropdown.size = carMakes.length + 1;
    }
  };

  const closeSelectBrand = () => {
    setOpenSelectBrand(false);
    const carMakeDropdown = document.getElementById('carMakeDropdown');
    carMakeDropdown.size = 1; // Повертаємо розмір до 1, щоб сховати випадаючий список
  };

  const clickSelectPrice = e => {
    e.preventDefault();
    if (isOpenSelectedPrice) {
      closeSelectPrice();
    } else {
      setIsOpenSelectPrice(true);
      const carPriceSelect = document.getElementById('carPrice');
      carPriceSelect.size = carPrice.length + 1;
    }
  };
  const closeSelectPrice = e => {
    setIsOpenSelectPrice(false);
    const carPriceSelect = document.getElementById('carPrice');
    carPriceSelect.size = 1;
  };
  const handleMileageValueFrom = e => {
    const value = e.target.value;
    const numericValue = parseFloat(value.replace(/,/g, ''));
    setMileageFrom(numericValue);
  };
  const handleMileageValueTo = e => {
    const value = e.target.value;
    const numericValue = parseFloat(value.replace(/,/g, ''));
    setMileageTo(numericValue);
  };

  const handleSearchClick = () => {
    dispatch(
      fromFilter({
        selectedBrand,
        selectedPrice:
          selectedPrice === '' ? '' : `${parseInt(selectedPrice, 10)}`,
        selectedMileageFrom,
        selectedMileageTo,
      })
    );
  };

  const handleClearSearchClick = e => {
    e.preventDefault();
    dispatch(
      fromFilter({
        selectedBrand: '',
        selectedPrice: '',
        selectedMileageFrom: '',
        selectedMileageTo: '',
      })
    );
    dispatch(updatePageToFirst());
    setSelectedValue('Select brand');
    setSelectedPrice('');
    setMileageFrom('');
    setMileageTo('');
  };

  return (
    <div className={css.filterWrap}>
      <div className={css.selectWrap}>
        <label htmlFor="carMakeDropdown" className={css.label}>
          Car brand{' '}
        </label>
        <div className={css.selectContainer}>
          <select
            id="carMakeDropdown"
            value={selectedBrand}
            className={css.filterSelect}
            onChange={e => {
              setSelectedValue(e.target.value);
              closeSelectBrand();
              handleOpenSelectedBrand();
            }}
            onClick={handleOpenSelectedBrand}
          >
            <option value="">Select brand</option>
            {carMakes.map(make => (
              <option key={make} value={make} className={css.optionSelect}>
                {make}
              </option>
            ))}
          </select>

          <div className={css.iconContainer} onClick={openSelectBrand}>
            <svg width={25} height={25} className={css.iconArrowBrand}>
              <use
                href={isOpenSelectBrand ? iconUp + '#up' : iconDown + '#down'}
              ></use>
            </svg>
          </div>
        </div>
      </div>

      {/* ----------------------------------price-------------------------------------------------------------------- */}
      <div className={css.selectWrap}>
        <label htmlFor="carPrice" className={css.label}>
          Price/1hour
        </label>
        <select
          id="carPrice"
          value={selectedPrice}
          className={`${css.filterSelect} ${css.filterSelectPrice}`}
          onChange={e => {
            setSelectedPrice(e.target.value);
            closeSelectPrice();
            handleOpenSelectedPrice();
          }}
          onClick={handleOpenSelectedPrice}
        >
          <option value="">To $</option>
          {carPrice.map(price => (
            <option
              key={price}
              value={price}
              className={`${css.optionSelect} ${css.optionSelectPrice}`}
            >
              {price}
            </option>
          ))}
        </select>

        <div className={css.iconContainer} onClick={clickSelectPrice}>
          <svg width={25} height={25} className={css.iconArrowPrice}>
            <use
              href={isOpenSelectedPrice ? iconUp + '#up' : iconDown + '#down'}
            ></use>
          </svg>
        </div>
      </div>

      {/* ----------------------------------mileage-------------------------------------------------------------------- */}
      <div className={css.mileageWrap}>
        <label htmlFor="mileageFrom" className={css.label}>
          Car Mileage / km{' '}
        </label>
        <div className={css.mileage}>
          <label
            htmlFor="mileageFrom"
            className={`${css.labelInput} ${css.labelInputMileageFrom}`}
          >
            From
          </label>
          <ReactInputMask
            type="text"
            id="mileageFrom"
            mask="9,999"
            title="Only number"
            className={`${css.filterMileage} ${css.filterMileageFrom}`}
            value={selectedMileageFrom}
            onChange={handleMileageValueFrom}
          />

          <label
            htmlFor="mileageTo"
            className={`${css.labelInput} ${css.labelInputMileageTo}`}
          >
            To
          </label>
          <ReactInputMask
            type="text"
            id="mileageTo"
            mask="9,999"
            className={`${css.filterMileage} ${css.filterMileageTo}`}
            value={selectedMileageTo}
            onChange={handleMileageValueTo}
          />
        </div>
      </div>
      <div className={css.buttonWrap}>
        <button className={css.button} onClick={handleSearchClick}>
          Search
        </button>
        <button className={css.button} onClick={handleClearSearchClick}>
          Clear search
        </button>
      </div>
    </div>
  );
};
