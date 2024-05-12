import { useState } from 'react';
import TopicModal from './TopicModal';

const TopicButton = () => {
    // Modal variables and functions
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <button onClick={handleShow} className='custom-overhead-button'> 
                Choose Topic
            </button>

            <TopicModal show={showModal} handleClose={handleClose}/>            
        </>
    )
}

export default TopicButton