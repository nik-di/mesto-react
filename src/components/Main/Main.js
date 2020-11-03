import React, { memo, useContext } from 'react';
import './main/main.css';
import ImagePopup from '../ImagePopup';
import PlaceCard from '../PlaceCard';
import EditProfilePopup from '../EditProfilePopup';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import AddPlacePopup from '../AddPlacePopup';
import EditAvatarPopup from '../EditAvatarPopup';

export const Main = memo(({
    isAddPlacePopupOpen,
    isEditAvatarPopupOpen,
    isEditProfileOpen,
    onAddPlacePopupToggle,
    onEditAvatarPopupToggle,
    onEditProfilePopupToggle,
    onCardClick,
    selectedImage,
    submitProfile,
    onSubmitAvatar,
    cards,
    onCardDelete,
    onCardLike,
    onSubmitPlace
}) => {

    const { name, about, avatar } = useContext(CurrentUserContext);

    const onDeleteCard = (cardId) => {
        onCardDelete(cardId);
    };

    const onLikeCard = (cardId, isLiked) => {
        onCardLike(cardId, isLiked);
    };

    return (
        <main className="main">
            <section className="profile root__section">
                <div className="user-info">
                    <div style={{ backgroundImage: `url(${avatar})` }} onClick={onEditAvatarPopupToggle} className="user-info__photo"></div>
                    <div className="user-info__data">
                        <h1 className="user-info__name">{name}</h1>
                        <p className="user-info__job">{about}</p>
                        <button onClick={onEditProfilePopupToggle} className="button user-info__edit-button">Edit</button>
                    </div>
                    <button onClick={onAddPlacePopupToggle} className="button user-info__button">+</button>
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
                                likeHandler={onLikeCard}
                                deleteHandler={onDeleteCard}
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
                <EditProfilePopup
                    isEditProfileOpen={isEditProfileOpen}
                    onEditProfilePopupToggle={onEditProfilePopupToggle}
                    onSubmitProfile={submitProfile}
                />

                {/* Попап добавления карточки */}
                <AddPlacePopup
                    isAddPlacePopupOpen={isAddPlacePopupOpen}
                    onAddPlacePopupToggle={onAddPlacePopupToggle}
                    onSubmitPlace={onSubmitPlace}
                />

                {/* Попап обновления аватара */}
                <EditAvatarPopup
                    isEditAvatarPopupOpen={isEditAvatarPopupOpen}
                    onEditAvatarPopupToggle={onEditAvatarPopupToggle}
                    onSubmitAvatar={onSubmitAvatar}
                />
            </section>
        </main>
    );
});