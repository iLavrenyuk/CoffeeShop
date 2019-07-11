import React from 'react';
import logo from '../../logo/Logo.svg';
import beans from '../../logo/Beans_logo.svg';
import coffee from '../../img/coffee_item.jpg';
import { Link } from 'react-router-dom';


const ItemPage = ({itemName}) => {
    console.log(itemName);
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <header>
                                <ul className="header">
                                    <li className="header__item">
                                        <Link to="/">
                                            <img src={logo} alt="logo" />
                                        </Link>
                                    </li>
                                    <li className="header__item">
                                        <Link to="/ourcoffee">Our coffee</Link>
                                    </li>
                                    <li className="header__item">
                                        <Link to="/pleasure">For your pleasure</Link>
                                    </li>
                                </ul>
                            </header>
                        </div>
                    </div>
                    <h1 className="title-big">Our coffee</h1>
                </div>
            </div>
            <section className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 offset-1">
                            <img className="shop__girl" src={coffee} alt="coffee_item" />
                        </div>
                        <div className="col-lg-4">
                            <div className="title">About it</div>
                            <img className="beanslogo" src={beans} alt="Beans logo" />
                            <div className="shop__point">
                                <span>Country:</span>
                                Brazil
                            </div>
                            <div className="shop__point">
                                <span>Description:</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <div className="shop__point">
                                <span>Price:</span>
                                <span className="shop__point-price">16.99$</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default ItemPage;