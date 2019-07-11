import React, { Component } from 'react';
import logo from '../../logo/Logo.svg';
import beans from '../../logo/Beans_logo.svg';
import { Link } from 'react-router-dom';
import CoffeeService from '../../services/coffee-service';
import Spinner from '../spinner';
import ErrorMassage from '../errorMassage';


export default class MainPage extends Component {

    CoffeeService = new CoffeeService();
    state = {
        bestItems: [],
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateItems();
    }

    onBestLoaded = (bestItems) => {
        this.setState({
            bestItems: bestItems.bestsellers,
            loading: false
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateItems = () => {
        this.CoffeeService.getResourse()
            .then(this.onBestLoaded)
            .catch(this.onError);
    }

    render() {
        const { bestItems, loading, error } = this.state;
        const errorMassage = error ? <ErrorMassage /> : null;
        const spinner = loading ? <Spinner /> : null;

        return (
            <>
                <div className="preview">
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
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <h1 className="title-big">Everything You Love About Coffee</h1>
                                <img className="beanslogo" src={beans} alt="Beans logo" />>
                        <div className="preview__subtitle">We makes every day full of energy and taste</div>
                                <div className="preview__subtitle">Want to try our beans?</div>
                                <Link to="/ourcoffee" className="preview__btn">More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="best">
                    <div className="container">
                        <div className="title">Our best</div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="best__wrapper">
                                    {errorMassage}
                                    {spinner}
                                    {
                                        bestItems.map(bestItem => {
                                            const { name, url, price } = bestItem;
                                            const urlName = `/ourcoffee/${name.replace(/ /g, '_')}`;

                                            const bestCoffee = (

                                                <div className="shop__item" key={name}>
                                                    <img src={url} alt="coffee" />
                                                    <div className="shop__item-title">{name}</div>
                                                    <div className="shop__item-price">{price}</div>
                                                </div>
                                            )

                                            const content = !(loading || error) ? bestCoffee : null;
                                            return (
                                                <Link to={urlName}
                                                    key={name}>{content}</Link>
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