// utils/ImageModal.jsx
import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, closeModal, selectedImage }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    className="fixed inset-0 flex items-center justify-center p-4"
    overlayClassName="fixed inset-0 bg-black bg-opacity-75"
  >
    {selectedImage && (
      <div className="relative max-w-4xl max-h-full">
        <img 
          src={selectedImage} 
          alt="Enlarged view" 
          className="max-h-[90vh] max-w-full object-contain"
        />
        <button
          onClick={closeModal}
          className="absolute -top-8 right-0 text-white text-3xl hover:text-gray-300"
          aria-label="Close modal"
        >
          ×
        </button>
      </div>
    )}
  </Modal>
);

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  selectedImage: PropTypes.string,
};

export default ImageModal;