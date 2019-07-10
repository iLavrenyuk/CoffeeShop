const bestLoaded = (newBest) => {
    return {
        type: 'BEST_LOADED',
        payload: newBest
    }
};

const coffeeLoaded = (newCoffee) => {
    return {
        type: 'COFFEE_LOADED',
        payload: newCoffee
    }
};

const goodsLoaded = (newGoods) => {
    return {
        type: 'GOODS_LOADED',
        payload: newGoods
    }
};


export {
    bestLoaded,
    coffeeLoaded,
    goodsLoaded
}