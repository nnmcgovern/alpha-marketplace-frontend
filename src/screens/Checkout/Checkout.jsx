import "./Checkout.css";
import { useState, useEffect } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { useNavigate } from "react-router-dom";
import api from "../../services/apiConfig";

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
      const carIds = cars.map((car) => car._id);

      try {
        const res = await api.post(`/cars/checkout`, { carIds, ...userData});

        if (res.data.success) {
          alert("Thank you for your purchase!");
          // Clear cart
          localStorage.setItem("cart", JSON.stringify([]));
          setRerender(!rerender);
          // redirect to homepage
          navigate("/");
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.log(error);
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
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Address fake"
            name="address"
            value={userData.address}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Credit Card fake"
            name="creditcard"
            value={userData.creditcard}
            onChange={handleInputChange}
          />
        </div>

        <div className="checkout-item-list-container">
          {cars &&
            cars.map((car) => (
              <CheckoutItem car={car} setRerender={setRerender} key={car._id} />
            ))}
        </div>

        <div className="total-price">
          <h3>Total: ${total}</h3>
        </div>
        
        <button type="submit">Complete Checkout</button>
      </form>
      </div>
    );
}
  
            
          
  
