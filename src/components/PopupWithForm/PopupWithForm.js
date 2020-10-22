import React from 'react';
import './popup/popup.css';
import closeIcon from '../../images/icon-close.svg';

function PopupWithForm({ handleClosePopup, title, popupName, children }) {
    function closeHandler({ target, currentTarget, keyCode }) {
        if (target.classList.contains('popup-close') || (target === currentTarget)) {
            handleClosePopup();
        };
        const ESCAPE_KEYCODE = 27;
        if (keyCode === ESCAPE_KEYCODE) {
            handleClosePopup();
        };
    }

    return (
        <div onClick={closeHandler} onKeyUp={closeHandler} className={`popup popup_type_${popupName} popup_is-opened`}>
            <div className="popup__content">
                <img src={closeIcon} alt="Закрыть окно" className="popup-close" />
                <h3 className="popup__title">{title}</h3>
                {children && children}
            </div>
        </div >
    );
}

export default PopupWithForm;