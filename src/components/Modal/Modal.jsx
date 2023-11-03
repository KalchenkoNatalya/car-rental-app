import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import css from './Modal.module.css';

export const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
  const handleCloseOnEsc = e => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (isOpen) {
    document.addEventListener('keydown', handleCloseOnEsc);
  } else {
    document.removeEventListener('keydown', handleCloseOnEsc);
  }
}, [isOpen, onClose]);

//   useEffect(() => {
//     const handleCloseOnEsc = e => {
//       if (e.key === 'Escape') {
//         onClose();
//       }
//     };
//     console.log('відкрили модалку');
//     document.addEventListener('keydown', handleCloseOnEsc);
//     return () => {
//       document.removeEventListener('keydown', handleCloseOnEsc);
//       console.log('закрили модалку');
//     };
//   }, []);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={isOpen ? `${css.modal} ${css.active}` : css.modal}
      onClick={onClose}
    >
      <div className={css.modalContent} onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body // Визначте DOM-вузол, в якому потрібно відображати модальне вікно
  );
};

// export const Modal = ({ active, setActive, children }) => {
//   return (
//     <div
//       className={active ? `${css.modal} ${css.active}` : css.modal}
//       onClick={() => setActive(false)}
//     >
//       <div className={css.modalContent} onClick={e => e.stopPropagation()}>
//         {/* <button className="close-button" onClick={onClose}>
//           ✕
//         </button> */}
//         {children}
//       </div>
//     </div>
//   );
// };
