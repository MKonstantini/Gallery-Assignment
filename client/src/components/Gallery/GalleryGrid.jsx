import { useSelector } from 'react-redux';
import GalleryModal from './GalleryModal';
import { useState } from 'react';

const GalleryGrid = () => {
  const { data } = useSelector((state) => state.pixabay);

  // Modal variables and functions
  const [showModal, setShowModal] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (data) => {
    setSelectedData(data);
    setShowModal(true);
  };

  return (
    <>
      <div className="row w-100">
        {
          // Map images in 3x3 grid
          data.map((item, index) => (
            <div
              key={index}
              className="col-4 p-0 gallery-item"
              onClick={() => handleShowModal(item)}
            >
              <img
                src={item.webformatURL}
                alt="gallery-image"
                className="gallery-img"
              />
            </div>
          ))
        }
      </div>

      <GalleryModal
        show={showModal}
        handleClose={handleCloseModal}
        data={selectedData}
      />
    </>
  );
};

export default GalleryGrid;
