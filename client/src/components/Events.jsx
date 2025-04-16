import React from 'react'

const Events = ({img, title, description}) => {
  return (
    <div className="col-md-6 container ">
      <div
        className="h-100 p-4 text-bg-dark rounded-3 "
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      >
        <h3> {title}</h3>
        <p className="">{description}</p>
        <button className="btn btn-outline-light" type="button">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Events