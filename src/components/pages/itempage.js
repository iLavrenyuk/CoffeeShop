import React from 'react';
import logo from '../../logo/Logo.svg';
import beans from '../../logo/Beans_logo.svg';
import coffee from '../../img/coffee_item;';
import { Link } from 'react-router-dom';


const ItemPage = () => {
    return (
        <>
            <div class="banner">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <header>
                                <ul class="header">
                                    <li class="header__item">
                                        <Link to="/">
                                            <img src={logo} alt="logo" />
                                        </Link>
                                    </li>
                                    <li class="header__item">
                                        <Link to="/ourcoffee">Our coffee</Link>
                                    </li>
                                    <li class="header__item">
                                        <Link to="/pleasure">For your pleasure</Link>
                                    </li>
                                </ul>
                            </header>
                        </div>
                    </div>
                    <h1 class="title-big">Our Coffee</h1>
                </div>
            </div>
            <section class="shop">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 offset-1">
                            <img class="shop__girl" src={coffee} alt="coffee_item" />
                        </div>
                        <div class="col-lg-4">
                            <div class="title">About it</div>
                            <img class="beanslogo" src={beans} alt="Beans logo" />
                            <div class="shop__point">
                                <span>Country:</span>
                                Brazil
                    </div>
                            <div class="shop__point">
                                <span>Description:</span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                            <div class="shop__point">
                                <span>Price:</span>
                                <span class="shop__point-price">16.99$</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default ItemPage;