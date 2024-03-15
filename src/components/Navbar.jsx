import { useContext } from 'react';
import { Context } from '../context/Context';
import uzFlag from '../images/uz.svg';
import ruFlag from '../images/ru.svg';


function Navbar() {
    const {flag,changeLang,lang} = useContext(Context)
    return (
        <div>
            <nav className="header__nav header">
                <div className="nav__lang">
                    <button className={`nav__lang-btn ${flag === true ? 'active' : ''}`} onClick={() => changeLang("uz")}>
                        <span>UZ</span>
                        <img src={uzFlag} alt="uzbek" />
                    </button>
                    <button className={`nav__lang-btn ${flag === false ? 'active' : ''}`} onClick={() => changeLang("ru")}>
                        <span>RU</span>
                        <img src={ruFlag} alt="russian" />
                    </button>
                </div>
                <div className="container">
                    <ul className="header__list">
                        <a href="" className="header__logo">PROWEB</a>
                        <li className="header__item">
                            <a href="" className="header__link">{lang.navTitle1}</a>
                        </li>
                        <li className="header__item">
                            <a href="" className="header__link">{lang.navTitle2}</a>
                        </li>
                        <li className="header__item">
                            <a href="" className="header__link">{lang.navTitle3}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar