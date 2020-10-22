import React, { useState, useEffect } from 'react';
import './main/main.css';
import avatarImage from '../../images/avatar.jpg';
import ImagePopup from '../ImagePopup';
import PopupWithForm from '../PopupWithForm';
import PlaceCard from '../PlaceCard';
import api from '../../utils/api';

function Main({
    isAddPlacePopupOpen,
    isEditAvatarPopupOpen,
    isEditProfileOpen,
    onAddPlace,
    onEditAvatar,
    onEditProfile,
    onCardClick,
    selectedImage
}) {

    const [userName, setUserName] = useState('Custo');
    const [userDescription, setUserDescription] = useState('Traveler');
    const [userAvatar, setUserAvatar] = useState(avatarImage);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api
            .getUserInfo()
            .then(({ avatar, name, about }) => {
                setUserName(name);
                setUserDescription(about);
                setUserAvatar(avatar);
            })
            .catch(err => console.error(err));
        api
            .getInitialCards()
            .then((cardsFromApi) => {
                setCards(cardsFromApi.slice(0, 10));
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <main className="main">
            <section className="profile root__section">
                <div className="user-info">
                    <div style={{ backgroundImage: `url(${userAvatar})` }} onClick={onEditAvatar} className="user-info__photo"></div>
                    <div className="user-info__data">
                        <h1 className="user-info__name">{userName}</h1>
                        <p className="user-info__job">{userDescription}</p>
                        <button onClick={onEditProfile} className="button user-info__edit-button">Edit</button>
                    </div>
                    <button onClick={onAddPlace} className="button user-info__button">+</button>
                </div>
            </section>
            <section className="places-list root__section">
                {
                    cards.length &&
                    cards.map((card) => {
                        return (
                            <PlaceCard key={card._id}
                                cardData={card}
                                imageCardClickHandler={onCardClick}
                            />
                        )
                    })
                }
            </section>
            <section className="popup-container">

                {/* Попап фотографии карточки */}
                {selectedImage && <ImagePopup
                    handleClosePopup={onCardClick}
                    selectedImage={selectedImage}
                />}

                {/* Попап редактирования профиля ↓ */}
                {isEditProfileOpen && <PopupWithForm
                    handleClosePopup={onEditProfile}
                    popupName="edit-profile"
                    title="Редактировать профиль"
                    children={
                        <form className="popup__form" name="edit">
                            <div>
                                <input required
                                    type="text"
                                    name="name-profile"
                                    className="popup__input popup-edit__input_type_name"
                                    placeholder="Имя"
                                    maxLength="30" />
                                <span className="error-name-profile error-message"></span>
                            </div>
                            <div>
                                <input required
                                    type="text"
                                    name="about-profile"
                                    className="popup__input popup-edit__input_type_about"
                                    placeholder="О себе"
                                    maxLength="30" />
                                <span className="error-about-profile error-message"></span>
                            </div>
                            <button type="submit" className="button popup__button" disabled>Сохранить</button>
                        </form>
                    }
                />}

                {/* Попап добавления карточки */}
                {isAddPlacePopupOpen && <PopupWithForm
                    handleClosePopup={onAddPlace}
                    popupName="add-card"
                    title="Новое место"
                    children={
                        <form noValidate className="popup__form" name="new">
                            <div>
                                <input required
                                    type="text"
                                    name="name"
                                    className="popup__input popup__input_type_name"
                                    placeholder="Название"
                                    minLength="2"
                                    maxLength="30"
                                />
                                <span className="error-name error-message"></span>
                            </div>
                            <div>
                                <input required
                                    type="url"
                                    name="link"
                                    className="popup__input popup__input_type_link-url"
                                    placeholder="Ссылка на картинку"
                                />
                                <span className="error-link error-message"></span>
                            </div>
                            <button type="submit" className="button popup__button" disabled>+</button>
                        </form>
                    }
                />}

                {/* Попап обновления аватара */}
                {isEditAvatarPopupOpen && <PopupWithForm
                    handleClosePopup={onEditAvatar}
                    popupName="edit-avatar"
                    title="Обновить аватар"
                    children={
                        <form noValidate className="popup__form" name="avatar">
                            <div>
                                <input required
                                    type="url"
                                    name="link"
                                    className="popup__input popup__input_type_link-url"
                                    placeholder="Ссылка на аватар"
                                />
                                <span className="error-name error-message"></span>
                            </div>
                            <button type="submit" className="button popup__button" disabled>Обновить аватар</button>
                        </form>
                    }
                />}
            </section>
        </main>
    );
}

export default Main;