import React from "react";
import cardMouseEffect from "common/cardMouseEffect";
import { thumparallaxDown } from "common/thumparallax";

const MinimalArea = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);

  return (
    <section className="min-area sub-bg py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/guy.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">HUMBLE BEGINNINGS</h4>
              <p className="wow txt" data-splitting>
                Mr. Bruno Penafort embarked on his journey in 1997, commencing operations with a single ambulance unit in Klang under the name “LIFECARE” Ambulance. Recognizing the immense potential for growth and expansion, the business underwent a transformative restructuring process, leading to the establishment of First Ambulance Services Sdn Bhd, a venture he embarked upon with his two sons. Despite the modest size of the initial team, the company experienced rapid development, delivering exceptional services and effectively managing an impressive volume of 3,000 calls in its very first year
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Our Mission
                  </h6>
                  <p>
                    To provide prompt, affordable, and high-quality healthcare services through a fully integrated network of customised and tailor-made medical solutions that put patients at the centre of what we do and free our clients to focus on their core business.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Our Goals
                  </h6>
                  <p>
                    To be ranked among the top ten ambulance service providers in the world.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Why Us?
                  </h6>
                  <p>
                    We believe the finest thing a man can do with his life is to save another. For over 20 years, we’ve served our community with the highest quality emergency medical services available, armed with the right tools, the right people and right skills. At FIRST Ambulance Services, we don’t just operate ambulances – we’re Driven to Save Lives.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
