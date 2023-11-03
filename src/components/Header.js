import headerLogo from '../images/logo.svg';
function Header(){
    return(
        <div className="header line">
            <img className="header__logo" src={headerLogo} alt="Лого"/>
        </div>  
    )
}
export default Header;
