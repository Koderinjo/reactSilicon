import React from "react";
import IphoneLeftDesk from "../assets/images/iphone-left-desk.svg";
import IphoneMidDesk from "../assets/images/iphone-mid-desk.svg";
import IphoneRightDesk from "../assets/images/iphone-right-desk.svg";
import IphoneLeftTab from "../assets/images/iphone-left-tab.svg";
import IphoneMidTab from "../assets/images/iphone-mid-tab.svg";
import IphoneRightTab from "../assets/images/iphone-right-tab.svg";

const HowItWorks = () => {
  const images = [
    {
      id: "left",
      alt: "iPhone to the left",
      desktopSrc: IphoneLeftDesk,
      tabletSrc: IphoneLeftTab,
    },
    {
      id: "mid",
      alt: "iPhone in the middle",
      desktopSrc: IphoneMidDesk,
      tabletSrc: IphoneMidTab,
    },
    {
      id: "right",
      alt: "iPhone to the right",
      desktopSrc: IphoneRightDesk,
      tabletSrc: IphoneRightTab,
    },
  ];

  return (
    <section id="how-does-it-work">
      <div className="container">
        <h1>How Does It Work?</h1>
        <div id="phone-6">
          {images.map((img) => (
            <React.Fragment key={img.id}>
              <img
                id={`iphone-${img.id}-desk`}
                src={img.desktopSrc}
                alt={`${img.alt} (desktop)`}
              />
              <img
                id={`iphone-${img.id}-tab`}
                src={img.tabletSrc}
                alt={`${img.alt} (tablet)`}
              />
            </React.Fragment>
          ))}
        </div>
        <div id="desktop-text">
          <h4>Latest transaction history</h4>
          <p>
            Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
          </p>
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
