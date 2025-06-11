// src/components/Modal/Modal.tsx
import React, { useEffect } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const modal = document.getElementById('id01');
      if (event.target === modal) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('click', handleOutsideClick);
    }

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div id="id01" className={styles.modal}>
      <div className={styles.modal_content}>
        <span onClick={onClose} className={styles.close} title="Close Modal">&times;</span>
        {children}
      </div>
    </div>
  );
};
export default Modal;