import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarsAdvertsThunk } from '../redux/operations';
import { Filter } from './Filter/Filter';
import { CarsList } from './CarsList/CarsList';
import { ListCarsPage } from 'pages/ListCars/ListCarsPage';
import { selectCarsAdverts } from 'redux/selectors';
// import { selectVisibleCarsAdverts } from "../redux/selectors";

export const App = () => {
 
  // const allCarsAdverts = useSelector(selectCarsAdverts);

  // console.log('allCarsAdverts', allCarsAdverts);


  // const filter = useSelector(state => state.carsAdvertsState.filter);
  // const filteredCarsAdverts = useSelector(selectVisibleCarsAdverts);
  
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCarsAdvertsThunk());
  // }, [dispatch]);

  return (
    <div
    // className={css.wrap}
    >
      <ListCarsPage />

      {/* {filter === '' ? (
      <ContactList
        contacts={contacts}
        onRemoveContacts={contactId => dispatch(deleteContact(contactId))}
       
      />
    ) : (
      <ContactList contacts={filteredContacts} />
    )} */}
    </div>
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
