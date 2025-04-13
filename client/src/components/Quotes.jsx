import React from 'react'

const Quotes = () => {
  return (
    <div >
      <div className="container">
        <div className="row justify-content-md-center p-5">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-4 display-5 text-center fw-bold">Quotes</h2>
            <p className="text-secondary text-center lead fs-5">
              "The best way to predict the future is to create it." - Peter Drucker
            </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quotes