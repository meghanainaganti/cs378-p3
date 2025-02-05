import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, price, image }) => {
    return (
        <div class="row fooditem">
            <div class="col-4">
                <img src={`/images/${image}`} alt={title} class="menuimg" />
            </div>
        <div class="col-8">
            <p class="menutitle">{title}</p>
            <p class="menudescription">{description}</p>
        <div class="lastrow">
            <p class="price">{`$${price}`}</p>
            <button type="button" class="btn btn-light addbutton">Add</button>
        </div>
      </div>
    </div>
    );
    
};

export default MenuItem;
