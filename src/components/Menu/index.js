import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo_reactflix.png';
import './Menu.css';
import Button from '../Button';
//criar menu
function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Reactflix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink"  to="/cadastro/Video">
                Novo  teste Video
            </Button>
        </nav>
    );
}

export default Menu; //exportar menu