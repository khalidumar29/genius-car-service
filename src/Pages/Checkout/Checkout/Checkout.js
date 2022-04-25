import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetails from "../../../Hooks/useServiceDetails";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  const [user] = useAuthState(auth);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };
    axios.post("http://localhost:5000/order", order).then((response) => {
      const { data } = response;
      if (data.insertedId) {
        toast("your order hasbeen placed");
        e.target.reset();
      }
    });
  };

  return (
    <div className='w-50 mx-auto'>
      <h2>Please Order: {service.name}</h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          className='mb-2 w-100'
          type='text'
          name='name'
          placeholder='name'
          value={user.displayName ?? ""}
          readOnly
          required
        />
        <br />
        <input
          className='mb-2 w-100'
          type='email'
          name='email'
          placeholder='email'
          value={user.email ?? ""}
          disabled
          required
        />
        <br />
        <input
          className='mb-2 w-100'
          type='text'
          name='service'
          placeholder='service'
          value={service.name ?? ""}
          readOnly
          required
        />
        <br />
        <input
          className='mb-2 w-100'
          type='text'
          name='address'
          placeholder='address'
          required
        />
        <br />
        <input
          className='mb-2 w-100'
          type='text'
          name='phone'
          placeholder='phone'
          required
        />
        <br />
        <input className='btn btn-primary' type='submit' value='Place Order' />
      </form>
    </div>
  );
};

export default Checkout;
