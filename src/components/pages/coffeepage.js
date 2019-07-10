import React from 'react';
import logo from '../../logo/Logo.svg';
import coffeeGirl from '../../img/coffee_girl.jpg';
import beansDark from '../../logo/Beans_logo_dark.svg';
import { Link } from 'react-router-dom';


const CoffeePage = () => {
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
                    <h1 className="title-big">Our Coffee</h1>
                </div>
            </div>
            <section className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-2">
                            <img className="shop__girl" src={coffeeGirl} alt="girl" />
                        </div>
                        <div className="col-lg-4">
                            <div className="title">About our beans</div>
                            <img className="beanslogo" src={beansDark} alt="Beans logo" />
                            <div className="shop__text">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                <br />
                                <br />
                                Afraid at highly months do things on at. Situation recommend objection do intention<br />
                                so questions. <br />
                                As greatly removed calling pleased improve an. Last ask him cold feel<br />
                                met spot shy want. Children me laughing we prospect answered followed. At it went<br />
                                is song that held help face.
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="row">
                        <div className="col-lg-4 offset-2">
                            <form action="#" className="shop__search">
                                <label className="shop__search-label">Looking for</label>
                                <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input" />
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <div className="shop__filter">
                                <div className="shop__filter-label">
                                    Or filter
                                </div>
                                <div className="shop__filter-group">
                                    <button className="shop__filter-btn">Brazil</button>
                                    <button className="shop__filter-btn">Kenya</button>
                                    <button className="shop__filter-btn">Columbia</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="shop__wrapper">
                                <div className="shop__item">
                                    <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee" />
                                    <div className="shop__item-title">
                                        Solimo Coffee Beans 2kg
                                    </div>
                                    <div className="shop__item-country">Brazil</div>
                                    <div className="shop__item-price">10.73$</div>
                                </div>
                                <div className="shop__item">
                                    <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee" />
                                    <div className="shop__item-title">
                                        Presto Coffee Beans 1kg
                                    </div>
                                    <div className="shop__item-country">Brazil</div>
                                    <div className="shop__item-price">15.99$</div>
                                </div>
                                <div className="shop__item">
                                    <img src="https://hhp-blog.s3.amazonaws.com/2018/07/iStock-673468996.jpg" alt="coffee" />
                                    <div className="shop__item-title">
                                        AROMISTICO Coffee 1kg
                                    </div>
                                    <div className="shop__item-country">Brazil</div>
                                    <div className="shop__item-price">6.99$</div>
                                </div>
                                <div className="shop__item">
                                    <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee" />
                                    <div className="shop__item-title">
                                        Solimo Coffee Beans 2kg
                                    </div>
                                    <div className="shop__item-country">Brazil</div>
                                    <div className="shop__item-price">10.73$</div>
                                </div>
                                <div className="shop__item">
                                    <img src="https://i0.wp.com/www.healthline.com/hlcmsresource/images/AN_images/AN275-cup-of-coffee-732x549-Thumb.jpg?w=756" alt="coffee" />
                                    <div className="shop__item-title">
                                        Solimo Coffee Beans 2kg
                                    </div>
                                    <div className="shop__item-country">Brazil</div>
                                    <div className="shop__item-price">10.73$</div>
                                </div>
                                <div className="shop__item">
                                    <img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee" />
                                    <div className="shop__item-title">
                                        Solimo Coffee Beans 2kg
                                    </div>
                                    <div className="shop__item-country">Brazil</div>
                                    <div className="shop__item-price">10.73$</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CoffeePage;