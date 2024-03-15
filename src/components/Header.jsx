import { useContext } from 'react';
import { Context } from '../context/Context';

function Header() {
    const {lang} = useContext(Context)
    return (
        <div>
            <header className="header">
                <div className="header__content">
                    <h1 className="header__title">{lang.headerTitle}</h1>
                    <button className="header__button">{lang.headerButton}</button>
                </div>
            </header>
        </div>
    )
}

export default Header