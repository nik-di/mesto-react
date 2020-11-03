import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import CurrentUserContext from '../contexts/CurrentUserContext';
import api from '../utils/api';

function App() {

  const [isEditProfileOpen, setEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCardImageUrl, setSelectedCardImage] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  // Первоначальное получение параметров карточек с сервера
  useEffect(() => {
    api
      .getInitialCards()
      .then(cardsFromApi => {
        setCards(cardsFromApi);
      })
      .catch(err => console.error(err));
  }, []);

  // Первоначальное получение параметров пользователя с сервера
  useEffect(() => {
    api
      .getUserInfo()
      .then(({ avatar, name, about, _id }) => {
        setCurrentUser((userData) => {
          const newUserData = { ...userData, name, about, avatar, _id };
          return newUserData;
        });
      })
      .catch(err => console.error(err));
  }, []);

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    setEditProfileOpen(!isEditProfileOpen);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleCardClick = (imageUrl) => {
    if (selectedCardImageUrl) {
      setSelectedCardImage(null);
      return;
    };
    setSelectedCardImage(imageUrl);
  };

  const submitProfileHandler = ({ name, about }) => {
    api
      .updateUserInfo(name, about)
      .then(newUserData => {
        setCurrentUser(newUserData);
        handleEditProfileClick();
      });
  };

  const submitAvatarHandler = ({ avatar }) => {
    api
      .updateUserAvatar(avatar)
      .then(newUserData => {
        setCurrentUser((currentUserData) => {
          const userDataCopy = { ...currentUserData, avatar: newUserData.avatar };
          return userDataCopy;
        });
        handleEditAvatarClick();
      });
  };

  const deleteCardHandler = (cardId) => {
    api
      .deleteCard(cardId)
      .then(() => {
        setCards(cards => (
          cards.filter(({ _id }) => _id !== cardId)
        ));
      });
  };

  const likeCardHandler = (cardId, isLiked) => {
    api
      .updateLike(cardId, isLiked)
      .then(newCard => {
        const newCardsArr = cards
          .map(currCard => currCard._id === cardId ? newCard : currCard);
        setCards(newCardsArr);
      });
  };

  const submitPlaceHandler = (placeName, imageLink) => {
    api
      .postCard(placeName, imageLink)
      .then(newCard => setCards([...cards, newCard]))
      .then(() => handleAddPlaceClick());
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        isEditProfileOpen={isEditProfileOpen}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        onEditAvatarPopupToggle={handleEditAvatarClick}
        onEditProfilePopupToggle={handleEditProfileClick}
        onAddPlacePopupToggle={handleAddPlaceClick}
        selectedImage={selectedCardImageUrl}
        onCardClick={handleCardClick}
        submitProfile={submitProfileHandler}
        onSubmitAvatar={submitAvatarHandler}
        onSubmitPlace={submitPlaceHandler}
        onCardDelete={deleteCardHandler}
        onCardLike={likeCardHandler}
        cards={cards}
      />
      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;
