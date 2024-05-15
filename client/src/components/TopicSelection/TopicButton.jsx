import { Button } from 'react-bootstrap';
import TopicModal from './TopicModal';
import { useState } from 'react';

const TopicButton = () => {
  // Modal variables
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button onClick={handleShow} className="custom-overhead-button">
        Choose Topic
      </Button>

      <TopicModal show={showModal} handleClose={handleClose} />
    </>
  );
};

export default TopicButton;
