import React, { memo, useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './place-card/place-card.css';

const PlaceCard = memo(({
    cardData: { name, likes, link, _id, owner },
    imageCardClickHandler,
    deleteHandler,
    likeHandler
}) => {
    const currentUser = useContext(CurrentUserContext);
    const isOwner = currentUser._id === owner._id;
    const isCurrUserLikeCard = likes.some(whoLiked => whoLiked._id === currentUser._id);

    const onLikeHandler = () => {
        likeHandler(_id, isCurrUserLikeCard);
    };

    const onDeleteHandler = () => {
        isOwner && deleteHandler(_id);
    };

    const imageClickHandler = ({ target }) => {
        const { backgroundImage } = target.style;
        const imageUrl = backgroundImage.slice(5, -2);
        imageCardClickHandler(imageUrl);
    };

    return (
        <div id={_id} className="place-card">
            <button onClick={onDeleteHandler} disabled={!isOwner} className="place-card__delete-icon" />
            <div className="place-card__image"
                style={{ backgroundImage: `url(${link})` }}
                onClick={imageClickHandler}
            ></div>
            <div className="place-card__description">
                <h3 className="place-card__name">{name}</h3>
                <div>
                    <button onClick={onLikeHandler}
                        className={
                            'place-card__like-icon' +
                            `${isCurrUserLikeCard ? ' place-card__like-icon_liked' : ''}`
                        }
                    />
                    <div className="place-card__like-counter">{likes.length}</div>
                </div>
            </div>
        </div >
    );
});

export default PlaceCard;