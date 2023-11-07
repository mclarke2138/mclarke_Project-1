import  { useState } from 'react';
import "./app.css";
import "./index.css";
import './product.jsx';
import './CartList'
import products from "./products.js";
import CartList from "./CartList";
import Product from './product'

function App() {
  const [cart, setContents] = useState([]);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  const handleAdd = (item) => {
    const newPrice = parseFloat(item.price.replace('$', '')); // Parse the item price

    // const precPrice = newPrice.toFixed(4) I tried to get the precision of the incomming object to 34 places 00.00 but i coulnt figure out why setting the precision breaks the add or remove price calculations 
    // setPrice(price + precPrice);

    setPrice(price + newPrice); // Update the total price
    setContents([...cart, item]); // Add the item to the cart
    setCount(count + 1); // Update the item count
  }

  const handleRemove = (itemId) => {
    const removedItem = cart.find((item) => item.id === itemId);// Find the item in the "cart" array with an "id" that matches the "itemId" provided.
  

    if (removedItem) {
      const subPrice = parseFloat(removedItem.price.replace('$', ''));
      // const precPrice = subPrice.toFixed(4)
      // setPrice(price - precPrice);
      setPrice(price - subPrice);
    }

    const updatedCart = cart.filter((item) => item.id !== itemId);
    setContents(updatedCart); // Remove the item from the cart
    setCount(count - 1);
  }

  

// Component InventoryCard that receives a prop named "items".
function InventoryCard({ items }) {
  return (
      <div className="Inventory-Container">
          {items.map((item) => (
              // Map over the "items" array and render a Product component for each item.
              <Product key={item.id} item={item} handleAdd={handleAdd} handleRemove={handleRemove} />
          ))}
      </div>
  )
}

return (
  <>
      <h1>Groceries App</h1> 
      <p>Items in Cart: {count}</p> {/* Display the number of items in the cart. */}

      <CartList cartItems={cart} handleRemove={handleRemove} price={price} />
      {/* Render the CartList component with the "cart" array, "handleRemove" function, and "price" prop. */}

      <InventoryCard items={products} />
      {/* Render the InventoryCard component with the "products" array. */}
  </>
)
}

export default App;
