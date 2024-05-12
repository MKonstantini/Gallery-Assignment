import PropTypes from 'prop-types';

const GalleryButton = ({text, onClickFunc}) => {    
    // Prop safety checks
    GalleryButton.propTypes = {
        text: PropTypes.string.isRequired,
        onClickFunc: PropTypes.func
    };

    return (
        <button className='custom-small-button' onClick={onClickFunc}>{text}</button>
    )    
}

export default GalleryButton