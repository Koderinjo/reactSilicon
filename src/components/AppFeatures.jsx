import React from 'react';
import IphoneCard from '../assets/images/iphone-card.svg';
import IconCard from '../assets/images/icon-card.svg';
import IconShield from '../assets/images/icon-shield.svg';
import IconStats from '../assets/images/icon-stats.svg';
import IconSupport from '../assets/images/icon-support.svg';
import IconCash from '../assets/images/icon-cash.svg';
import IconEmoji from '../assets/images/icon-emoji.svg';

const features = [
  { img: IconCard, title: 'Easy Payments', description: 'Id mollis consectetur congue egestas.' },
  { img: IconShield, title: 'Data Security', description: 'Augue pulvinar justo, fermentum.' },
  { img: IconStats, title: 'Cost Statistics', description: 'Mattis urna ultricies non amet.' },
  { img: IconSupport, title: 'Support 24/7', description: 'A elementum, imperdiet enim.' },
  { img: IconCash, title: 'Regular Cashback', description: 'Sit facilisis dolor arcu.' },
  { img: IconEmoji, title: 'Top Standards', description: 'Faucibus cursus maecenas.' }
];

const AppFeatures = () => (
  <section id="app-features">
    <div className="container">
      <div id="image">
        <img src={IphoneCard} alt="Iphone + Card" />
      </div>
      <div>
        <h1>App Features</h1>
        <p id="features-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas.</p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="icon-box">
              <img src={feature.img} alt={`Icon ${feature.title}`} />
            </div>
            <div className="feature-text">
              <h5>{feature.title}</h5>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AppFeatures;
