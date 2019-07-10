import React from 'react';
import Footer from '../footer';
import { CoffeePage, MainPage, ItemPage } from '../pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => {
    return (
        <>
            <Router>
                <Route path='/' exact component={MainPage} />
                <Route path='/ourcoffee' component={CoffeePage} />
                <Route path='/pleasure' component={ItemPage} />
                <Footer />
            </Router>
        </>
    );
}
export default App;