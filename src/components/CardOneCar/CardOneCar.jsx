import { CardDetails } from 'components/CardDetails/CardDetails';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

export const CardOneCar = ({ oneCar }) => {
  const {
    id,
    img,
    make,
    address,
    model,
    year,
    type,
    rentalPrice,
    rentalCompany,
    functionalities,
  } = oneCar;

  const parts = address.split(',');
  const city = parts[1].trim();
  const country = parts[2].trim();

  const [isModalOpen, setIsModalOpen] = useState(false);
  //   const [modalActive, setModalActive] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="car-card">
      <img src={img} alt={` car ${make} ${model}`} />
      <h2>{`${make} ${model}, ${year}`}</h2>

      <p>{rentalPrice}</p>

      <p>| {city}</p>
      <p>| {country} </p>
      <p>| {type}</p>

      <p>| {rentalCompany}</p>
      <p>| {id}</p>
      <p>| {functionalities[0]}</p>

      <button
        type="button"
        onClick={openModal}
        //    onClick={()=>setModalActive(true)}
      >
        Learn More
      </button>
      <Modal
        // active={modalActive}
        // setActive={setModalActive}
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <CardDetails oneCar={oneCar} />
      </Modal>
    </div>
  );
};
