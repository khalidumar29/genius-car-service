import React from "react";
import expert1 from "../../../../Images/experts/expert-1.jpg";
import expert2 from "../../../../Images/experts/expert-2.jpg";
import expert3 from "../../../../Images/experts/expert-3.jpg";
import expert4 from "../../../../Images/experts/expert-4.jpg";
import expert5 from "../../../../Images/experts/expert-5.jpg";
import expert6 from "../../../../Images/experts/expert-6.png";
import Expert from "../Expert/Expert";
const experts = [
  { id: 1, name: "will smith", img: expert1 },
  { id: 1, name: "chirs rock", img: expert2 },
  { id: 1, name: "dwayen jonshon", img: expert3 },
  { id: 1, name: "messi vai", img: expert4 },
  { id: 1, name: "ronaldo uncle", img: expert5 },
  { id: 1, name: "stachy jhonson", img: expert6 },
];

const Experts = () => {
  return (
    <div className='container'>
      <h2 className='text-primary text-center'>Our Experts</h2>
      <div className='row'>
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
