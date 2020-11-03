import React from 'react';
import './popup-image/popup-image.css';
import closeIcon from '../../images/icon-close.svg';

function ImagePopup({ handleClosePopup, selectedImage }) {
    function popupCloseHandler({ target, keyCode }) {
        !target.classList.contains('popup-image__image') && handleClosePopup();
    };

    return (
        <div onClick={popupCloseHandler} className="popup popup_type_image popup_is-opened">
            <div className="popup-image__content">
                <img src={closeIcon} alt="Закрыть окно" className="popup-close" />
                <img src={selectedImage} className="popup-image__image" alt="Картинка карточки" />
            </div>
        </div>
    );
}

export default ImagePopup;