import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ id, title, description, price, image, updateSubtotal, updateItemCounts, clearAll }) => {

   const [count, setCount] = useState(0)

   const incrementCount = () => {
    setCount(count + 1);
    updateSubtotal(price);
    updateItemCounts(id, 1);
   }
    
   const decrementCount = () => {
    if(count > 0){
        setCount(count - 1);
    } else {
        setCount(0);
    }
    updateSubtotal(-price);
    updateItemCounts(id, -1);
   }

   useEffect(() => {
    setCount(0);
   }, [clearAll]);

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
            <span className="counter-container">
                <button className="edititembutton" onClick={incrementCount}>+</button>
                <span> {count} </span>
                <button className="edititembutton" onClick={decrementCount}>-</button>
            </span>
        </div>
      </div>
    </div>
    );
    
};

export default MenuItem;
