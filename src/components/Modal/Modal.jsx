import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';
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
      className={isOpen ? `${css.backdrop} ${css.active}` : css.backdrop}
      onClick={onClose}
    >
      <div className={css.modal} onClick={e => e.stopPropagation()}>
     
        {children }
      </div>
    </div>,
    document.body
  );
};
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, 
  onClose: PropTypes.func.isRequired, 
  children: PropTypes.node, 
};