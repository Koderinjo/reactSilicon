import React from 'react';

const HowItWorks = () => {
  const images = [
    { id: 'left', alt: 'iPhone to the left', desktopSrc: 'iphone-left-desk.svg', tabletSrc: 'iphone-left-tab.svg' },
    { id: 'mid', alt: 'iPhone in the middle', desktopSrc: 'iphone-mid-desk.svg', tabletSrc: 'iphone-mid-tab.svg' },
    { id: 'right', alt: 'iPhone to the right', desktopSrc: 'iphone-right-desk.svg', tabletSrc: 'iphone-right-tab.svg' }
  ];

  return (
    <section id="how-does-it-work">
      <div className="container">
        <h1>How Does It Work?</h1>
        <div id="phone-6">
          {images.map((img) => (
            <React.Fragment key={img.id}>
              <img id={`iphone-${img.id}-desk`} src={`images/${img.desktopSrc}`} alt={`${img.alt} (desktop)`} />
              <img id={`iphone-${img.id}-tab`} src={`images/${img.tabletSrc}`} alt={`${img.alt} (tablet)`} />
            </React.Fragment>
          ))}
        </div>
        <div id="desktop-text">
          <h4>Latest transaction history</h4>
          <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.</p>
        </div>
        <div id="tablet-text">
          <h4>Step 3. Transfers to people from your contact list</h4>
          <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices.</p>
        </div>
        <div id="mobile-text">
          <h4>Transfers to people from your contact list</h4>
          <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
