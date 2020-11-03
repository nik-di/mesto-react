import React, { memo, useState } from 'react';
import PopupWithForm from '../PopupWithForm';
import urlValidator from '../../utils/urlValidator';

export const AddPlacePopup = memo(({
    isAddPlacePopupOpen,
    onAddPlacePopupToggle,
    onSubmitPlace
}) => {

    const [placeName, setPlaceName] = useState('');
    const [placeLink, setPlaceLink] = useState('');

    const onChangePlaceName = ({ target }) => {
        setPlaceName(target.value);
    };

    const onChangePlaceLink = ({ target }) => {
        setPlaceLink(target.value);
    };

    const submitFormHandler = (e) => {
        e.preventDefault();
        isFormValidity && onSubmitPlace(placeName, placeLink);
    };

    const isFormValidity = placeName.length > 2 && urlValidator(placeLink);

    return (
        isAddPlacePopupOpen && <PopupWithForm
            handleClosePopup={onAddPlacePopupToggle}
            popupName="add-card"
            title="Новое место"
            children={
                <form onSubmit={submitFormHandler} noValidate className="popup__form" name="new">
                    <div>
                        <input required
                            type="text"
                            name="name"
                            className="popup__input popup__input_type_name"
                            placeholder="Название"
                            minLength="2"
                            maxLength="30"
                            value={placeName}
                            onChange={onChangePlaceName}
                        />
                        <span className="error-name error-message"></span>
                    </div>
                    <div>
                        <input required
                            type="url"
                            name="link"
                            className="popup__input popup__input_type_link-url"
                            placeholder="Ссылка на картинку"
                            value={placeLink}
                            onChange={onChangePlaceLink}
                        />
                        <span className="error-link error-message"></span>
                    </div>
                    <button
                        type="submit"
                        className="button popup__button"
                        disabled={!isFormValidity}
                    >+</button>
                </form>
            }
        />
    );
});