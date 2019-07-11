import React from 'react';
import Footer from '../footer';
import { CoffeePage, MainPage, ItemPage, PleasurePage } from '../pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => {

    return (
        <>
            <Router>
                <Route path='/' exact component={MainPage} />
                <Route path='/pleasure' component={PleasurePage} />
                <Route path='/ourcoffee' exact component={CoffeePage} />
                <Route path='/ourcoffee/:name'
                    render={
                        ({ match }) => {
                            const { name } = match.params;
                            return <ItemPage  itemName={name} />
                        }
                    }
                />
                <Footer />
            </Router>
        </>
    );
}
export default App;