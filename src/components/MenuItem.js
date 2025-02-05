import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, price, image }) => {
    return (
        <div className="row fooditem">
            <div className="col-4">
                <img src={`${process.env.PUBLIC_URL}/images/${image}`} alt={title} className="menuimg" />
            </div>
        <div className="col-8">
            <p className="menutitle">{title}</p>
            <p className="menudescription">{description}</p>
        <div className="lastrow">
            <p className="price">{`$${price}`}</p>
            <button type="button" className="btn btn-light addbutton">Add</button>
        </div>
      </div>
    </div>
    );
    
};

export default MenuItem;
