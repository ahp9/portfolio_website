
import { navigation } from '../../../data/navigation'

import './Header.css'

function Header() {
    return (
        <header className="header" aria-label="Main Navigation">
            <ul className="header__list">
                <a href="#hero" className="header__link header__logo">
                    ÁHP
                </a>
                {navigation.map((item) => (
                    <a key={item.href} href={item.href} className="header__link nav__link">
                        {item.label}
                    </a>
                ))}
            </ul>
        </header>
    )
}


export default Header