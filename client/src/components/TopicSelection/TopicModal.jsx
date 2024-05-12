import { useDispatch, useSelector } from "react-redux"
import { Modal, Button } from 'react-bootstrap';
import { setPage, setTopic  } from "../../redux/pixabay"
import PropTypes from 'prop-types';

const TopicModal = ({ show, handleClose }) => {
    // Variables
    const displayTopics = ['hobbies', 'food', 'flowers', 'work', 'sport'];
    const { topic } = useSelector(state => state.pixabay);
    const dispatch = useDispatch();

    // On select topic function
    const onTopicSelect = (topic) => {
        dispatch(setTopic(topic));
        dispatch(setPage(1));
        handleClose();
    }

    // Styling function
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
            <Modal.Body className='p-5 w-75 m-auto' >
                    <h1 className='mb-4'>Choose Topic</h1>
                    <hr />
                    {
                        // Button for each topic
                        displayTopics.map((displayTopic, index) =>
                            <Button 
                                key={index} 
                                disabled={topic == displayTopic} 
                                variant="light" 
                                onClick={() => onTopicSelect(displayTopic)} 
                                className='w-100 my-2'>
                                {capitalizeFirstLetter(displayTopic)}
                            </Button>
                        )
                    } 
                    <hr />                    
                    <Button variant="light" onClick={handleClose} className='w-100 my-2'>
                        Cancel
                    </Button>          
                <div className='centered-div'>                    
                </div>
            </Modal.Body>
        </Modal>
    );
}

// Prop safety check
TopicModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
};

export default TopicModal;