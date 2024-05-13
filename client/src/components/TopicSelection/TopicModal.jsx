import { useDispatch, useSelector } from "react-redux"
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import { setPage, setTopic  } from "../../redux/pixabay"
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRef } from "react";

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

    // Searchbar handling
    const inputRef = useRef(null);
    const handleSearch = () => {
        const inputValue = inputRef.current.value;
        onTopicSelect(inputValue)
    }    

    // Styling function
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
            <Modal.Body className='py-5 px-0 px-sm-5 w-75 m-auto' >
                    {/* Header */}
                    <h1 className='mb-4'>Choose Topic</h1>
                    <hr />
                    {/* Displayed Topics */}
                    {
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
                    {/* Search Bar */}
                    <InputGroup>
                        <Form.Control placeholder="Search..." ref={inputRef}/>
                        <Button variant="secondary" onClick={handleSearch}>
                            <FontAwesomeIcon icon={faSearch} />
                        </Button>
                    </InputGroup>
                    <hr />        
                    {/* Cancel Button */}
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