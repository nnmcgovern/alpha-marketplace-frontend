import "./Checkout.css";
import { useState, useEffect } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";
// import api from "../../services/apiConfig";
import { deleteCar } from "../../services/cars";

export default function Checkout() {
  const [cars, setCars] = useState(JSON.parse(localStorage.getItem("cart")));
  const [rerender, setRerender] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    address: "",
    creditcard: "",
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCars(JSON.parse(localStorage.getItem("cart")));
    
    // Calculate total
    const totalPrice = cars?.reduce((acc, car) => acc + car.price, 0) || 0;
    setTotal(totalPrice);
  }, [rerender]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState, [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Collect car IDs
    // const carIds = cars.map((car) => car._id);
  
    try {
      cars.forEach(async (car) => {
        // Delete car from database
        await deleteCar(car._id);
      });
  
      alert("Thank you for your purchase!");
      
      // Clear cart
      localStorage.setItem("cart", JSON.stringify([]));
      setRerender(!rerender);
      
      // Redirect to homepage or a success page
      navigate("/");
    } catch (error) {
      console.log("Error deleting the car: ", error);
      alert("Something went wrong. Please try again.");
    }
  }; 

    return (
      <div>
        <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>
        <div className="user-details">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={userData.name}
            onChange={handleInputChange} required
          />
          <input
            type="text"
            placeholder="Address fake"
            name="address"
            value={userData.address}
            onChange={handleInputChange} required
          />
          <input
            type="text"
            placeholder="Credit Card fake"
            name="creditcard"
            value={userData.creditcard}
            onChange={handleInputChange} required
          />
        </div>

        <div className="checkout-item-list-container">
          {cars &&
            cars.map((car) => (
              <CartItem car={car} setRerender={setRerender} key={car._id} />
            ))}
        </div>

        <div className="total-price">
          <h3>Total: ${total}</h3>
          </div>

          {!cars || cars.length === 0 && (
            <p>Your cart is empty. Please add items before checking out.</p>
          )}
        
          <button type="submit"
            disabled={!cars || cars.length === 0}>
            Complete Checkout
          </button>
      </form>
      </div>
    );
}
  
            
          
  
