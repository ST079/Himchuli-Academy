import React from 'react'

const Events = (img) => {
  console.log(img)
  return (
      <div className="col-md-6">
        <div className="h-100 p-5 text-bg-dark rounded-3 " style={{ backgroundImage: `url(${img.img})`, backgroundSize: 'cover', backgroundPosition: 'center',objectFit: 'cover' }}>
          <h2> A Refreshing Escape to Fulchowki 🌿</h2>
          <p className="">
            Escape the city buzz and unwind in the serene hills of Phulchowki.
            Surrounded by lush forests, cool breezes, and peaceful trails, it's
            the perfect spot to relax, reconnect with nature, and recharge your
            mind.
          </p>
          <button className="btn btn-outline-light" type="button">
            Learn More
          </button>
        </div>
      </div>
  );
}

export default Events