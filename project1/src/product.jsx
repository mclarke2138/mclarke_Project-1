

//Rendering component that recieves "item" prop and renders the object properties matching the item id
export default function Product({ item, handleAdd }) {
  const { image, productName, brand, quantity, price } = item;

  return (
    <div className="Inventory-Card">
      
      <img src={image} alt="" />
      <h2>{productName}</h2>
      <h3>{brand}</h3>
      <p>{quantity}</p>
      <p>{price}</p>


      <button onClick={() => handleAdd(item)}>Add to cart</button> 
      {/*When clicked, it calls the "handleAdd" function with the "item" as an argument, which adds the item to the cart.*/}
    </div>
  )
}
