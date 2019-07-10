import React, { Component } from 'react';
import logo from '../../logo/Logo.svg';
import coffeeGirl from '../../img/coffee_girl.jpg';
import beansDark from '../../logo/Beans_logo_dark.svg';
import { Link } from 'react-router-dom';
import CoffeeService from '../../services/coffee-service';
import Spinner from '../spinner';
import ErrorMassage from '../errorMassage';


export default class CoffeePage extends Component {
    CoffeeService = new CoffeeService();
    state = {
        coffeeItems: [],
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateItems();
    }

    onCoffeeLoaded = (coffeeItems) => {
        this.setState({
            coffeeItems,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateItems = () => {
        this.CoffeeService.getCoffee()
            .then(this.onCoffeeLoaded)
            .catch(this.onError);
    }

    render() {
        const { coffeeItems, loading, error } = this.state;

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
                                    {
                                        coffeeItems.map(coffeeItem => {
                                            const { name, country, url, price } = coffeeItem;

                                            const ourCoffee = (
                                                <div className="shop__item" key={name}>
                                                    <img src={url} alt="coffee" />
                                                    <div className="shop__item-title">{name}</div>
                                                    <div className="shop__item-country">{country}</div>
                                                    <div className="shop__item-price">{price}</div>
                                                </div>
                                            )

                                            const errorMassage = error ? <ErrorMassage key={name} /> : null;
                                            const spinner = loading ? <Spinner key={name} /> : null;
                                            const content = !(loading || error) ? ourCoffee : null;
                                            return (
                                                spinner,
                                                errorMassage,
                                                content
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

}