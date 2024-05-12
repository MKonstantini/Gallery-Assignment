import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';


const TopicModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
            <Modal.Body >
                <div className='centered-div'>                    
                    <h1 className='mb-4'>Choose Topic</h1>
                    <hr />
                    <Button variant="light" onClick={handleClose} className='w-100 my-2'>
                        Hobbies
                    </Button>
                    <Button variant="light" onClick={handleClose} className='w-100 my-2'>
                        Food
                    </Button>
                    <Button variant="light" onClick={handleClose} className='w-100 my-2'>
                        Sports
                    </Button>          
                    <hr />
                    <Button variant="light" onClick={handleClose} className='w-100 mt-2'>
                        Cancel
                    </Button>          
                </div>
            </Modal.Body>
        </Modal>
    );
}

TopicModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
};

export default TopicModal;