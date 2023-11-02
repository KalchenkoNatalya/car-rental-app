import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarsAdvertsThunk } from "../redux/operations";
import { Filter } from "./Filter/Filter";
// import { selectVisibleCarsAdverts } from "../redux/selectors";

export const App = () => {
  const allCarsAdverts = useSelector(state => state.carsAdvertsState.dataCarsAdverts );
  console.log(allCarsAdverts);
  // const filter = useSelector(state => state.carsAdvertsState.filter);
  // const filteredCarsAdverts = useSelector(selectVisibleCarsAdverts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsAdvertsThunk());
  }, [dispatch]);

  return (
    <div 
    // className={css.wrap}
    >
    <h2>Phonebook</h2>
    {/* <FormAddContacts  /> */}
   
    <h2>Find contacts by name</h2>
    {/* <Filter valueFilter={filter} /> */}

    <h2>Contacts</h2>
    <h2>Filter</h2>
    <Filter/>
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
