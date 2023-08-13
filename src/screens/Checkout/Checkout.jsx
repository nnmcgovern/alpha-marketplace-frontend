import "./Checkout.css";
import { useState, useEffect } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { useNavigate } from "react-router-dom";
import api from "../../services/apiConfig";

export default function Checkout() {
  const [cars, setCars] = useState(JSON.parse(localStorage.getItem("cart")));
  const [rerender, setRerender] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    address: "",
    creditcard: "",
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCars(JSON.parse(localStorage.getItem("cart")));
    
    // Calculate total
    const totalPrice = cars?.reduce((acc, car) => acc + car.price, 0); || 0;
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
      // Send data to backend

      const carIds = cars.map((car) => car._id);

      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/cars/checkout`, {
          method: "POST",
          body: JSON.stringify({ carIds, ...userData }),
          headers: {
            "Content-Type": "application/json",
          },
        }
        );
        const data = await res.json();

        if (data.success) {
          // Success alert
          alert("Thank you for your purchase!");
          // Clear cart
          localStorage.setItem("cart", JSON.stringify([]));
          setRerender(!rerender);

          // redirect to homepage
        } else {
          // Error alert
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.log(error);
      }
    };
        

    

    return (
      <div>
        <h1>Checkout</h1>
        <div className="checkout-item-list-container">
          {cars &&
            cars.map((car) => (
              <CheckoutItem car={car} setRerender={setRerender} key={car._id} />
            ))}
        </div>
      </div>
    );
  }
            
          
  
