import React from 'react';
import './place-card/place-card.css';

function PlaceCard({
    cardData: { name, likes, link, _id },
    imageCardClickHandler
}) {
    return (
        <div id={_id} className="place-card">
            <div className="place-card__image"
                style={{ backgroundImage: `url(${link})` }}
                onClick={({ target }) => {
                    const { backgroundImage } = target.style;
                    const imageUrl = backgroundImage.slice(5, -2);
                    imageCardClickHandler(imageUrl);
                }}
            ></div>
            <div className="place-card__description">
                <h3 className="place-card__name">{name}</h3>
                <div>
                    <button className="place-card__like-icon" />
                    <div className="place-card__like-counter">{likes.length}</div>
                </div>
            </div>
        </div >
    );
}

export default PlaceCard;