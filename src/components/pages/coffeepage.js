import React, { Component } from 'react';
import logo from '../../logo/Logo.svg';
import coffeeGirl from '../../img/coffee_girl.jpg';
import beansDark from '../../logo/Beans_logo_dark.svg';
import { Link } from 'react-router-dom';
import CoffeeService from '../../services/coffee-service';
import Spinner from '../spinner';
import ErrorMassage from '../errorMassage';


export default class CoffeePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coffeeItems: [],
            loading: true,
            error: false,
            filter: null,
            term: ''
        }

        this.search = this.search.bind(this);
    }

    CoffeeService = new CoffeeService();


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

    updateFilter = (filter) => {
        this.setState({
            filter: filter
        })
    }

    search(e) {
        const term = e.target.value;
        this.setState({ term });
    }

    searchCoffee(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        });
    }

    render() {
        const { coffeeItems, loading, error, filter, term } = this.state;
        const visible = this.searchCoffee(coffeeItems, term)

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
                                <div className="title">About our goods</div>
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
                                    <input id="filter" type="text" placeholder="start typing here..." className="shop__search-input"
                                        onChange={this.search} />
                                </form>
                            </div>
                            <div className="col-lg-4">
                                <div className="shop__filter">
                                    <div className="shop__filter-label">
                                        Filter
                                </div>
                                    <div className="shop__filter-group">
                                        <button className="shop__filter-btn" onClick={() => this.updateFilter(null)}>x</button>
                                        <button className="shop__filter-btn" onClick={() => this.updateFilter('Brazil')}>Brazil</button>
                                        <button className="shop__filter-btn" onClick={() => this.updateFilter('Kenya')}>Kenya</button>
                                        <button className="shop__filter-btn" onClick={() => this.updateFilter('Columbia')}>Columbia</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="shop__wrapper">
                                    {
                                        visible.map(coffeeItem => {
                                            const { name, country, url, price } = coffeeItem;
                                            const urlName = `/ourcoffee/${name.replace(/ /g, '_')}`;
                                            let errorMassage, spinner, content;

                                            if (country === filter || filter === null) {

                                                const ourCoffee = (
                                                    <Link to={urlName}
                                                        key={name}
                                                        name={this.props.urlName}>
                                                        <div className="shop__item">
                                                            <img src={url} alt="coffee" />
                                                            <div className="shop__item-title">{name}</div>
                                                            <div className="shop__item-country">{country}</div>
                                                            <div className="shop__item-price">{price}</div>
                                                        </div>
                                                    </Link>
                                                )

                                                errorMassage = error ? <ErrorMassage key={name} /> : null;
                                                spinner = loading ? <Spinner key={name} /> : null;
                                                content = !(loading || error) ? ourCoffee : null;
                                            }
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