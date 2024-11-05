import React from 'react';

const Brands = () => (
  <section id="brands">
    <div className="container">
      {[1, 2, 3, 4, 5, 6].map(num => (
        <div key={num} id={`brand-${num}`} className="brand-box">
          <img src={`/images/brand-${num}.svg`} alt={`Brand-${num}`} />
        </div>
      ))}
    </div>
  </section>
);

export default Brands;
