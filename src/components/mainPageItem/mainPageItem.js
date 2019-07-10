import React from 'react';

const MainPageItem = ({ bestItem }) => {
    console.log(bestItem);
    const { name, url, price } = bestItem;
    return (
        <div className="best__item">
            <img src={url} alt="coffee" />
            <div className="best__item-title">{name}</div>
            <div className="best__item-price">{price}</div>
        </div>
    )
}
export default MainPageItem;