import React from 'react';

const features = [
  { img: 'icon-card.svg', title: 'Easy Payments', description: 'Id mollis consectetur congue egestas.' },
  { img: 'icon-shield.svg', title: 'Data Security', description: 'Augue pulvinar justo, fermentum.' },
  { img: 'icon-stats.svg', title: 'Cost Statistics', description: 'Mattis urna ultricies non amet.' },
  { img: 'icon-support.svg', title: 'Support 24/7', description: 'A elementum, imperdiet enim.' },
  { img: 'icon-cash.svg', title: 'Regular Cashback', description: 'Sit facilisis dolor arcu.' },
  { img: 'icon-emoji.svg', title: 'Top Standards', description: 'Faucibus cursus maecenas.' }
];

const AppFeatures = () => (
  <section id="app-features">
    <div className="container">
      <div id="image">
        <img src="src/assets/images/iphone-card.svg" alt="Iphone + Card" />
      </div>
      <div>
        <h1>App Features</h1>
        <p id="features-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas.</p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="icon-box">
              <img src={`src/assets/images/${feature.img}`} alt={`Icon ${feature.title}`} />
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
