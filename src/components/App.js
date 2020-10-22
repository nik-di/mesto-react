import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {

  const [isEditProfileOpen, setEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCardImageUrl, setSelectedCardImage] = useState(null);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setEditProfileOpen(!isEditProfileOpen);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(imageUrl) {
    if (selectedCardImageUrl) {
      setSelectedCardImage(null);
      return;
    };
    setSelectedCardImage(imageUrl);
  }

  return (
    <>
      <Header />
      <Main
        isEditProfileOpen={isEditProfileOpen}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        selectedImage={selectedCardImageUrl}
        onCardClick={handleCardClick}
      />
      <Footer />
    </>
  );
}

export default App;
