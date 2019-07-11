import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CoffeeService from '../../services/coffee-service';
import logo from '../../logo/Logo.svg';
import coffeeGood from '../../img/coffee_good.jpg';
import beansDark from '../../logo/Beans_logo_dark.svg';
import Spinner from '../spinner';
import ErrorMassage from '../errorMassage';

export default class PleasurePage extends Component {
    CoffeeService = new CoffeeService();
    state = {
        goodsItems: [],
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateItems();
    }

    onGoodsLoaded = (goodsItems) => {
        this.setState({
            goodsItems: goodsItems.goods,
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
        this.CoffeeService.getResourse()
            .then(this.onGoodsLoaded)
            .catch(this.onError);
    }

    render() {
        const { goodsItems, loading, error } = this.state;
        const errorMassage = error ? <ErrorMassage /> : null;
        const spinner = loading ? <Spinner /> : null;

        return (
            <>
                <div className="banner-pleasure">
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
                                <img className="shop__girl" src={coffeeGood} alt="girl" />
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
                            <div className="col-lg-10 offset-lg-1">
                                <div className="shop__wrapper">
                                    {spinner}
                                    {errorMassage}
                                    {
                                        goodsItems.map(goodsItem => {
                                            const { name, url, price } = goodsItem;

                                            const ourCoffee = (
                                                <div className="shop__item" key={name}>
                                                    <img src={url} alt="coffee" />
                                                    <div className="shop__item-title">{name}</div>
                                                    <div className="shop__item-price">{price}</div>
                                                </div>
                                            )

                                            const content = !(loading || error) ? ourCoffee : null;
                                            return (
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