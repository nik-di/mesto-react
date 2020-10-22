import React from 'react';
import './popup-image/popup-image.css';
import closeIcon from '../../images/icon-close.svg';

function ImagePopup({ handleClosePopup, selectedImage }) {
    return (
        <div className="popup popup_type_image popup_is-opened">
            <div className="popup-image__content">
                <img onClick={handleClosePopup} src={closeIcon} alt="Закрыть окно" className="popup-close" />
                <img src={selectedImage} className="popup-image__image" alt="Картинка карточки" />
            </div>
        </div>
    );
}

export default ImagePopup;