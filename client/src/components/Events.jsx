import React from 'react'

const Events = ({img, title, description}) => {
console.log(title);
  return (
    <div className="col-md-6">
      <div
        className="h-100 p-5 text-bg-dark rounded-3 "
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      >
        <h2> {title}</h2>
        <p className="">{description}</p>
        <button className="btn btn-outline-light" type="button">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Events