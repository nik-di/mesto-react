import React, { memo, useContext, useEffect, useState } from 'react';
import PopupWithForm from '../PopupWithForm';
import CurrentUserContext from '../../contexts/CurrentUserContext';

export const EditProfilePopup = memo(({ isEditProfileOpen, onEditProfilePopupToggle, onSubmitProfile }) => {
    const { name, about } = useContext(CurrentUserContext);
    const [profileName, setProfileName] = useState('');
    const [profileAbout, setProfileAbout] = useState('');

    useEffect(() => {
        setProfileName(name);
        setProfileAbout(about);
    }, [name, about]);

    const handleChangeName = ({ target }) => {
        setProfileName(target.value);
    };

    const handleChangeAbout = ({ target }) => {
        setProfileAbout(target.value)
    };

    const handleSubmitForm = (ev) => {
        ev.preventDefault();
        onSubmitProfile({
            name: profileName,
            about: profileAbout
        });
    };

    return (
        isEditProfileOpen && <PopupWithForm
            handleClosePopup={onEditProfilePopupToggle}
            popupName="edit-profile"
            title="Редактировать профиль"
            children={
                <form onSubmit={handleSubmitForm} className="popup__form" name="edit">
                    <div>
                        <input required
                            type="text"
                            name="name-profile"
                            className="popup__input popup-edit__input_type_name"
                            placeholder="Имя"
                            maxLength="30"
                            value={profileName}
                            onChange={handleChangeName}
                        />
                        <span className={"error-name-profile error-message" +
                            `${profileName.length < 2 ? ' error-message_active' : ''}`}
                        >Длина имени должна быть не менее 2-х букв</span>
                    </div>
                    <div>
                        <input required
                            type="text"
                            name="about-profile"
                            className="popup__input popup-edit__input_type_about"
                            placeholder="О себе"
                            maxLength="30"
                            value={profileAbout}
                            onChange={handleChangeAbout}
                        />
                        <span className={"error-about-profile error-message" +
                            `${profileAbout.length < 1 ? ' error-message_active' : ''}`}
                        >Длина текста должна быть не менее 1-го символа</span>
                    </div>
                    <button type="submit" className="button popup__button" >Сохранить</button>
                </form>
            }
        />
    );
});