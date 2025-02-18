import './App.css';
import MenuItem from './components/MenuItem';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

function App() {
  
  const [itemCounts, setItemCounts] = useState(Array(10).fill(0));
  const [subtotal, setSubtotal] = useState(0);
  const [clearAll, setClearAll] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const updateSubtotal = (amount) => setSubtotal(prevSubtotal => Math.max(0, prevSubtotal + amount))
  const updateItemCounts = (id, amount) => {
    setItemCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[id - 1] = Math.max(0, newCounts[id - 1] + amount);
      return newCounts;
    });
  };

  const clearButton = () => {
    setItemCounts(Array(10).fill(0));
    setSubtotal(0);
    setClearAll(prev => !prev);
  }

  return (
    <div>
      <div className="menu">
        {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
        <Header/>
        {menuItems.map((item) => (
           <MenuItem key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} image={item.imageName} updateSubtotal={updateSubtotal} updateItemCounts={updateItemCounts} clearAll={clearAll}/> 
        ))}
        <span className="bottomrow"> 
          <span>
            <span>Subtotal: $</span>
            <span>{subtotal.toFixed(2)}</span>
          </span>
          <button className="bottombuttons" onClick={() => setShowModal(true)}>Order</button>
          <button className="bottombuttons" onClick={clearButton}>Clear All</button>
        </span>
      </div>
      
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header>
          <Modal.Title>Order Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {itemCounts.every(count => count === 0) ? (
            <p>No items in cart</p>
          ) : 
          (
            <div>
              <p>Order placed!</p>
              <ul>
                {itemCounts.map((count, index) => count > 0 ? (
                  <li key={index}>
                    {count} {menuItems[index].title}
                  </li>
                ) : null
                )}
              </ul>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => { setShowModal(false); }}>
              Ok
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default App;
