import React from 'react';
import Footer from '../footer';
import { CoffeePage, MainPage, ItemPage, PleasurePage } from '../pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = ({ name }) => {

    return (
        <>
            <Router>
                <Route path='/' exact component={MainPage} />
                <Route path='/pleasure' component={PleasurePage} />
                <Route path='/ourcoffee' exact component={CoffeePage} />
                <Route path='/ourcoffee/Death_Wish_Bean' component={ItemPage}
                    // render={
                    //     ({ match }) => {
                    //         const { name } = match.params;
                    //         console.log(name);
                    //         return <ItemPage itemName={name} />
                    //     }
                    // }
                />
                <Footer />
            </Router>
        </>
    );
}
export default App;