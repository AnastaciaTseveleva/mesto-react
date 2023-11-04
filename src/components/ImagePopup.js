function ImagePopup({ card, onClose}){
   console.log(card)
    return(
        <div className={`popup popup-img ${card.link ? 'popup_opened' : ''}`}>
            <div className="popup-img__container">
                <button className=" popup__close-button" onClick={onClose}></button>
                <figure className="popup-img__figure">
                    <img className="popup-img__full" src={card.link} alt={card.name}/>
                    <figcaption className="popup-img__text">{card.name}</figcaption>
                </figure>
            </div>
        </div>
    )
}
export default ImagePopup;