import React from 'react';
import Brand1 from '../assets/images/brand-1.svg';
import Brand2 from '../assets/images/brand-2.svg';
import Brand3 from '../assets/images/brand-3.svg';
import Brand4 from '../assets/images/brand-4.svg';
import Brand5 from '../assets/images/brand-5.svg';
import Brand6 from '../assets/images/brand-6.svg';

const brandImages = {
  1: Brand1,
  2: Brand2,
  3: Brand3,
  4: Brand4,
  5: Brand5,
  6: Brand6,
};

const Brands = () => (
  <section id="brands">
    <div className="container">
      {[1, 2, 3, 4, 5, 6].map(num => (
        <div key={num} id={`brand-${num}`} className="brand-box">
          <img src={brandImages[num]} alt={`Brand-${num}`} />
        </div>
      ))}
    </div>
  </section>
);

export default Brands;
