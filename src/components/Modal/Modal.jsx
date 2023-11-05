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
    document.body
  );
};
