function PopupWithForm(props){
    return(
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container ">
                <button className="popup__close-button" onClick={props.isOpen ? props.onClose : null}></button>            
                <h2 className='popup__header'>{props.title}</h2>
                <form className='popup__form' name={props.name}>
                    <fieldset className="popup__set">
                        {props.children}
                        <button type="submit" className="popup__save-button">Сохранить</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )

}
export default PopupWithForm;
//props.children используется для отображения всего, что вы включаете между открывающим и закрывающим тегами при вызове компонента.