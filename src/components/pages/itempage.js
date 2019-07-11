import React, { Component } from 'react';
import logo from '../../logo/Logo.svg';
import beans from '../../logo/Beans_logo.svg';
import { Link } from 'react-router-dom';
import CoffeeService from '../../services/coffee-service';
import Spinner from '../spinner';
import ErrorMassage from '../errorMassage';


export default class ItemPage extends Component {

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

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    updateItems = () => {
        this.CoffeeService.getCoffee()
            .then(this.onCoffeeLoaded)
            .catch(this.onError);
    }

    render() {
        const { itemName } = this.props;
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
                        <h1 className="title-big">{itemName.replace(/_/g, ' ')}</h1>
                    </div>
                </div>
                {
                    coffeeItems.map(coffeeItem => {
                        const { name } = coffeeItem;
                        let errorMassage, spinner, content;

                        if (name === itemName.replace(/_/g, ' ')) {
                            const { name, country, url, price, description } = coffeeItem;
                            const CoffeeShow = (
                                <div key={name}>
                                    <section className="shop">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-5 offset-1">
                                                    <img className="shop__girl" src={url} alt="coffee_item" />
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="title">About it</div>
                                                    <img className="beanslogo" src={beans} alt="Beans logo" />
                                                    <div className="shop__point">
                                                        <span>Country:</span>
                                                        {country}
                                                    </div>
                                                    <div className="shop__point">
                                                        <span>Description:</span>
                                                        {description}
                                                    </div>
                                                    <div className="shop__point">
                                                        <span>Price:</span>
                                                        <span className="shop__point-price">{price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            )

                            errorMassage = error ? <ErrorMassage key={name} /> : null;
                            spinner = loading ? <Spinner key={name} /> : null;
                            content = !(loading || error) ? CoffeeShow : null;
                        }
                        return (
                            spinner,
                            errorMassage,
                            content
                        )
                    })
                }
            </>
        )
    }
};
