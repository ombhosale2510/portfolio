// utils/ImageGallery.jsx
import PropTypes from 'prop-types';

const ImageGallery = ({ images, handleClick, columns = 2, imageHeight = 'h-64' }) => (
  <div className={`grid grid-cols-${columns} gap-4`}>
    {images.map((img, index) => (
      <div
        key={index}
        data-testid={`image-container-${index}`}
        className="cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
        onClick={() => handleClick(img)}
      >
        <img
          src={img}
          alt={`Visual ${index + 1}`}
          className={`w-full ${imageHeight} object-cover`}
        />
      </div>
    ))}
  </div>
);

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  columns: PropTypes.number,
  imageHeight: PropTypes.string,
};

export default ImageGallery;