// imports
import * as React from 'react';
import './Navbar.scss'
import { useAppSelector } from "../../redux/useRedux";
import { RootState } from "../../redux/store";

interface Props {

}

const Navbar: React.FC<Props> = () => {
    // --------inicio estados--------
    // --------fin estados--------

    // --------hooks--------
    const logo = useAppSelector((state:RootState) => state.page.logo);
    // --------fin hooks-------

    // --------metodos--------

    // --------fin de metodos--------

    // --------retorno de componente
    return (
        <header className='nav'>
            <a href="/" className='nav-link'>
                <img className='nav-logo' src={logo} alt="logo"/>
            </a>
        </header>
    )
}

export default Navbar;