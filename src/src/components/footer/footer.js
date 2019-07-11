import React from 'react';
import logoBlack from '../../logo/Logo_black.svg';
import beansDark from '../../logo/Beans_logo_dark.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 offset-lg-4">
                        <ul className="footer">
                            <li className="footer__item">
                                <Link to="/">
                                    <img src={logoBlack} alt="logo" />
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/ourcoffee">Our coffee</Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/pleasure">For your pleasure</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <img className="beanslogo" src={beansDark} alt="Beans logo" />
            </div>
        </footer >
    )
}
export default Footer;