import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className="row">
            <img src={`${process.env.PUBLIC_URL}/images/japaneserestaurant.jpg`} alt="restaurant logo" className="logo"/>
            <p className="firsttext">Authentic Japanese Cuisine</p>
            <p className="secondtext">Savor the Art of Flavor</p>
        </div>
    );
};

export default Header;