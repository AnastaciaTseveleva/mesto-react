function ImagePopup({ card, onClose, isOpen  }){
    return(
        <div className={`popup-img ${isOpen ? 'popup-img_opened' : ''}`}>
            <div className="popup-img__container">
                <button className="popup-img__close-button popup__close-button" type="button" onClick={isOpen ? onClose : null}></button>
                <figure className="popup-img__figure">
                    <img className="popup-img__full" src={card.link} alt={card.name}/>
                    <figcaption className="popup-img__text">{card.name}</figcaption>
                </figure>
            </div>
        </div>
    )
}
export default ImagePopup;