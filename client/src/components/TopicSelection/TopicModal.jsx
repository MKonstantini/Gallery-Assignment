import { featuredTopics, setPage, setTopic  } from "../../redux/pixabay";
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { useRef } from "react";

const TopicModal = ({ show, handleClose }) => {
    const { topic } = useSelector(state => state.pixabay);
    const dispatch = useDispatch();

    // On select topic function
    const onTopicSelect = (topic) => {
        dispatch(setTopic(topic));
        dispatch(setPage(1));
        handleClose();
    };

    // Searchbar handling
    const inputRef = useRef(null);
    const handleSearch = () => {
        const inputValue = inputRef.current.value;
        if (inputValue != '') {
            onTopicSelect(inputValue);           
        } 
        else {
            handleClose();
        }
    };  

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
            <Modal.Body className='py-5 px-0 px-sm-5 w-75 m-auto' >
                {/* Header */}
                <h1 className='mb-4'>Choose Topic</h1>
                <hr />
                {/* Featured */}
                <p className="fst-italic m-0">Featured:</p>
                {
                    featuredTopics.map((displayTopic, index) =>
                        <Button 
                            key={index} 
                            onClick={() => onTopicSelect(displayTopic)} 
                            disabled={topic == displayTopic} 
                            className='w-100 my-2'
                            variant="light">
                            {capitalizeFirstLetter(displayTopic)}
                        </Button>
                    )
                } 
                <hr />
                {/* Search */}
                <p className="fst-italic m-1">Search Anything:</p>
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