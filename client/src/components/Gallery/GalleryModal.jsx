import { faUser, faTags, faCloudDownload, faEye, faThumbsUp, faComment, faBoxArchive } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const GalleryModal = ({ show, handleClose, data }) => {
    // Object data by row for mapping
    const modalDetailRows = [
        { title: 'Uploaded by', icon: faUser, fieldName: 'user' },
        { title: 'Tags', icon: faTags, fieldName: 'tags' },
        { title: 'Downloads', icon: faCloudDownload, fieldName: 'downloads' },
        { title: 'Views', icon: faEye, fieldName: 'views' },
        { title: 'Likes', icon: faThumbsUp, fieldName: 'likes' },
        { title: 'Comments', icon: faComment, fieldName: 'comments' },
        { title: 'Collections', icon: faBoxArchive, fieldName: 'collections' }
    ]

    return (
        data &&
        <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
            <Modal.Body className='py-5 px-0 px-sm-5 w-75 m-auto' >
                {/* Title */}
                <h1 className='mb-4'>Image Details</h1>
                <hr className='mb-4'/>
                {/* Image */}
                <div>
                    <img src={data.webformatURL} alt="selected image" className='w-auto' />
                </div>
                <a href={data.pageURL} target='_blank' className='btn btn-light mb-0'>Pixabay</a>         
                {/* Details */}
                <hr className='mt-0'/>                    
                <div className='text-start ms-2'>
                    {
                        modalDetailRows.map((row, index) => 
                            <div key={index} className='d-sm-flex align-items-center gap-3 mb-3'>
                                <div className='d-flex gap-2 gap-sm-3 align-items-center justify-content-center justify-content-sm-start'>
                                    <FontAwesomeIcon icon={row.icon} />
                                    <p className='m-0 fw-bold'>{row.title}:</p>
                                </div>
                                <p className='m-0 text-center text-sm-start'>{data[row.fieldName]}</p>
                            </div>
                        )
                    }
                </div>
                <hr />
                {/* Close Button */}
                <Button variant="light" onClick={handleClose} className='w-100 my-2'>
                    Close
                </Button>
            </Modal.Body>
        </Modal>
    );
}

// Prop safety check
GalleryModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    data: PropTypes.object
};

export default GalleryModal;
