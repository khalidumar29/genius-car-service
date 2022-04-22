import React from "react";
import useServices from "../../Hooks/UseServices";

const ManageService = () => {
  const [services, setServices] = useServices();
  const handledelete = (id) => {
    const proceed = window.confirm("you confirm to delete this service");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = services.filter((service) => service.id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div className='w-50 mx-auto'>
      <h2>manege your services</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h5>
            {service.name}{" "}
            <button onClick={() => handledelete(service._id)}>X</button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageService;
