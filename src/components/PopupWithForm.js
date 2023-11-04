function PopupWithForm({title, name, isOpen, onClose, children}){
    return(
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container ">
                <button className="popup__close-button" onClick={onClose}></button>            
                <h2 className='popup__header'>{title}</h2>
                <form className='popup__form' name={name}>
                    <fieldset className="popup__set">
                        {children}
                        <button type="submit" className="popup__save-button">Сохранить</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )

}
export default PopupWithForm;
//props.children используется для отображения всего, что вы включаете между открывающим и закрывающим тегами при вызове компонента.