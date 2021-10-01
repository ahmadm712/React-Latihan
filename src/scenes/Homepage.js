import React from "react";
import Section from "elements/Section";
import Header from "parts/Header";
import HeroImage from "assets/images/hero-image.png";
import FeatureTile01 from "assets/images/feature-tile-icon-01.svg";
import FeatureTile02 from "assets/images/feature-tile-icon-02.svg";
import FeatureTile03 from "assets/images/feature-tile-icon-03.svg";

import Zoom from "react-reveal/Zoom";
import Clients from "parts/Clients";
import Feature from "parts/Feature";

export default function Homepage() {
  const features = [
    {
      imgSrc: FeatureTile01,
      imgAlt: "Feature tile icon 01",
      title: "Join the system",
      description:
        "A pseudo-Latin text used in webdesign, layout, and printing inplace of things to emphasise design.",
    },
    {
      imgSrc: FeatureTile02,
      imgAlt: "Feature tile icon 02",
      title: "Join the system",
      description:
        "A pseudo-Latin text used in webdesign, layout, and printing inplace of things to emphasise design.",
    },
    {
      imgSrc: FeatureTile03,
      imgAlt: "Feature tile icon 03",
      title: "Join the system",
      description:
        "A pseudo-Latin text used in webdesign, layout, and printing inplace of things to emphasise design.",
    },
  ];
  return (
    <div className="body-wrap">
      <Header></Header>
      <main className="site-content">
        <Section className="hero illustration-section-01" isCenterContent>
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <Zoom bottom delay={500}>
                  <h1 className="mt-0 mb-16">Landing template for startups</h1>
                </Zoom>
                <Zoom bottom delay={1000}>
                  <p className="mt-0 mb-32">
                    Our landing page template works on all devices, so you only
                    have to set it up once, and get beautiful results forever.
                  </p>
                </Zoom>

                {/* <div className="container-xs">
                  
                </div> */}
              </div>
              <div className="hero-figure illustration-element-01">
                <Zoom bottom delay={1500}>
                  <img
                    className="has-shadow"
                    src={HeroImage}
                    alt="Hero"
                    width="896"
                    height="504"
                  />
                </Zoom>
              </div>
            </div>
          </div>
          <Clients></Clients>
        </Section>
        <Section className="features-tiles">
          <div className="container">
            <div className="features-tiles-inner section-inner">
              <div className="tiles-wrap">
                {features.map((features, index) => (
                  <Feature
                    key={index}
                    delayInMS={index*500}
                    data={features}
                  ></Feature>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
