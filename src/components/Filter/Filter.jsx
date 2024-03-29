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
  'Land',
  'Tesla',
];
// const carPrice = [
//   'To $',
//   30,
//   40,
//   50,
//   60,
//   70,
//   80,
//   90,
//   100,
//   120,
//   150,
//   200,
//   250,
//   300,
//   400,
//   500,
// ];
const carPrice = [
  // 'To $',
  30,
  40,
  50,
  60,
  70,
  80,
  90,
  100,
  120,
  150,
  200,
  250,
  300,
  400,
  500,
];
export const Filter = () => {
  const dispatch = useDispatch();
  const [selectedBrand, setSelectedValue] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  // const [selectedPriceFrom, setPriceFrom] = useState('');
  // const [selectedPriceTo, setPriceTo] = useState('');
  const [selectedMileageFrom, setMileageFrom] = useState('');
  const [selectedMileageTo, setMileageTo] = useState('');
  const [isOpenSelectBrand, setOpenSelectBrand] = useState(false);
  const [isOpenSelectedPrice, setIsOpenSelectedPrice] = useState(false);

  const handleOpenSelectedBrand = e => {
    e.preventDefault();
    setOpenSelectBrand(prev => !prev);
  };
  const handleOpenSelectedPrice = e => {
    e.preventDefault();
    setIsOpenSelectedPrice(prev => !prev);
  };

  // const selectValuePrice = e => {
  //   e.preventDefault();
  //   const value = e.target.value;
  //   // setSelectedPrice(`${value}$`);
  //   // setSelectedPrice(value + `$`);

  //   // setSelectedPrice(value + '$');
  //   // setSelectedPrice(value);
  //   const newSelectedPrice = value === 'To $' ? '' : `${value}$`;
  //   // console.log(newSelectedPrice);
  //   setSelectedPrice(newSelectedPrice);
  // };

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
  console.log('selectedPrice:', selectedPrice);

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
            onChange={e => setSelectedValue(e.target.value)}
            onClick={handleOpenSelectedBrand}
          >
            <option value="">Select brand</option>
            {carMakes.map(make => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
          <div className={css.iconContainer} onClick={handleOpenSelectedBrand}>
            <svg width={25} height={25} className={css.iconArrowBrand}>
              <use
                // href={isOpenSelectBrand ? iconDown + '#down' : iconUp + '#up'}
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
          // defaultValue={selectedPrice}
          className={`${css.filterSelect} ${css.filterSelectPrice}`}
          // onChange={e => setSelectedPrice(e.target.value)}
          onChange={e => setSelectedPrice(e.target.value)}
          // onChange={selectValuePrice}
          onClick={handleOpenSelectedPrice}
        >
          <option value="">To $</option> 
          {carPrice.map(price => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
        {/* {selectedPrice !== '' && <div className={css.iconDollar}>$</div>} */}

        {isOpenSelectedPrice ? (
          <svg width={25} height={25} className={css.iconArrowPrice}>
            <use href={iconUp + '#up'}></use>
          </svg>
        ) : (
          <svg width={25} height={25} className={css.iconArrowPrice}>
            <use href={iconDown + '#down'}></use>
          </svg>
        )}
      </div>

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
            // className={classNames(css.filterMileage, css.filterMileageFrom)}
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
            // onChange={e => setMileageTo(e.target.value)}
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
