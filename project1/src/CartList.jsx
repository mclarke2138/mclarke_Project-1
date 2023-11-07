// This is a functional component named CartList that receives three props: cartItems, handleRemove, and price.
function CartList({ cartItems, handleRemove, price }) {

    return (
      // Renders a div with the class "Cart-Container."
      <div className="Cart-Container">
        <h2>Your Cart </h2> {/* Display a heading "Your Cart." */}
  
        <div className='counter-container'>
          {cartItems.map((item) => ( // Map over the cartItems array to display each item in the cart.
            <div className='CartList-Card' key={item.id}>
              {item.productName} - {item.price} {/* Display the product name and price of the item. */}
  
              <button className='Remove-Button' onClick={()=>{
                  handleRemove(item.id) // When the "Remove" button is clicked, call the handleRemove function with the item's ID to remove the item from the cart.
              }}
              >Remove</button>
            </div>
          ))}
          
          <button className='Buy-Button'>Buy - total = ${price} </button> {/* Display a "Buy" button with the total price of the items in the cart. */}
        </div>
      </div>
    );
  }
  
  // Export the CartList component as the default export.
  export default CartList;
  