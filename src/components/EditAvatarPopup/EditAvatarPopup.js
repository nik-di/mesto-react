import React, { memo, useRef } from 'react';
import PopupWithForm from '../PopupWithForm';

export const EditAvatarPopup = memo(({ isEditAvatarPopupOpen, onEditAvatarPopupToggle, onSubmitAvatar }) => {

    const avatarInput = useRef();
    const submitButton = useRef();

    const handleButtonEnabled = () => {
        if (avatarInput.current.validity.valid) {
            submitButton.current.removeAttribute('disabled');
        } else {
            submitButton.current.setAttribute('disabled', '');
        };
    };

    const submitAvatarHandler = (ev) => {
        ev.preventDefault();
        onSubmitAvatar({
            avatar: avatarInput.current.value
        });
    };

    return (isEditAvatarPopupOpen && <PopupWithForm
        handleClosePopup={onEditAvatarPopupToggle}
        popupName="edit-avatar"
        title="Обновить аватар"
        children={
            <form onSubmit={submitAvatarHandler} className="popup__form" name="avatar">
                <div>
                    <input ref={avatarInput} required
                        type="url"
                        name="link"
                        className="popup__input popup__input_type_link-url"
                        placeholder="Ссылка на аватар"
                        onChange={handleButtonEnabled}
                    />
                    <span className="error-name error-message"></span>
                </div>
                <button ref={submitButton} type="submit" className="button popup__button" disabled>Обновить аватар</button>
            </form>
        }
    />)
});