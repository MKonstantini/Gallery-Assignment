import PropTypes from 'prop-types';

const GalleryButton = ({text, onClick}) => {    
    GalleryButton.propTypes = {
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func
    };

    return (
        <button className='custom-small-button' onClick={onClick}> {text} </button>
    )    
}

export default GalleryButton