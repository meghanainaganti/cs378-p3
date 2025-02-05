import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div class="row">
            <img src="../../images/japaneserestaurant.jpg" alt="taco bell logo" class="logo"/>
            <p class="firsttext">Authentic Japanese Cuisine</p>
            <p class="secondtext">Savor the Art of Flavor</p>
        </div>
    );
};

export default Header;