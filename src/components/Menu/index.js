import React from 'react';
import Logo from '../../assets/img/logo_reactflix.png';
import './Menu.css';
import Button from '../Button';
//criar menu
function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Reactflix logo"/>
            </a>

            <Button as="a" className="ButtonLink"  href="/">
                Novo  teste Video
            </Button>
        </nav>
    );
}

export default Menu; //exportar menu