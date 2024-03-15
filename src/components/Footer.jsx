import  { useContext } from 'react';
import { Context } from '../context/Context';
import facebooksvg from '../images/facebook.svg';
import instagramsvg from '../images/instagram.svg';
import mailsvg from '../images/mail.svg';
import telegramsvg from '../images/telegram.svg';
import whatsupsvg from '../images/whatsup.svg';


function Footer() {
    const {lang} = useContext(Context)
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <p className="footer__title">{lang.FooterTitle}</p>
                    <div className="footer__contact">
                        <a href="" className="footer__link">
                            <img src={facebooksvg} alt="facebook" />
                        </a>
                        <a href="" className="footer__link">
                            <img src={instagramsvg} alt="instagram" />
                        </a>
                        <a href="" className="footer__link">
                            <img src={telegramsvg} alt="telegram" />
                        </a>
                        <a href="" className="footer__link">
                            <img src={mailsvg} alt="mail" />
                        </a>
                        <a href="" className="footer__link">
                            <img src={whatsupsvg} alt="whatsup" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer