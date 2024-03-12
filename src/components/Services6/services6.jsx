import React from "react";
import { Link } from 'gatsby';

const Services6 = () => {
  return (
    <section className="serv-arch">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/pexels1.jpg)", display: 'flex', flexDirection: 'column'}}
          >
            <h6 className="numb">01</h6>
            <h5>Team Wellbeing Initiatives</h5>
            <p>
              A company is only good as its employees.
            </p>
            <div style={{ marginTop: 'auto' }}>
            <Link to="/about/about-dark" className="custom-font more main-color">
              Read More
            </Link>
            </div>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/pexels2.jpg)", display: 'flex', flexDirection: 'column' }}
          >
            <h6 className="numb">02</h6>
            <h5>Community Impact Program</h5>
            <p>
              We are passionately dedicated to saving lives, making a meaningful impact in out community.
            </p>
            <div style={{ marginTop: 'auto' }}>
            <Link to="/about/about-dark" className="custom-font more main-color">
              Read More
            </Link>
            </div>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/pexels3.jpg)", display: 'flex', flexDirection: 'column' }}
          >
            <h6 className="numb">03</h6>
            <h5>Making Vehicles Special</h5>
            <p>
              Bespoke Solution for Emergency Vehicles.
            </p>
            <div style={{ marginTop: 'auto' }}>
            <Link to="/about/about-dark" className="custom-font more main-color">
              Read More
            </Link>
            </div>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/pexels4.jpg)", display: 'flex', flexDirection: 'column' }}
          >
            <h6 className="numb">04</h6>
            <h5>Nexus Operation Centre</h5>
            <p>
              Disaster resilient operations.
            </p>
            <div style={{ marginTop: 'auto' }}>
            <Link to="/about/about-dark" className="custom-font more main-color">
              Read More
            </Link>
            </div>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/pexels5.jpg)", display: 'flex', flexDirection: 'column' }}
          >
            <h6 className="numb">05</h6>
            <h5>Intergrated Turnkey Innovations</h5>
            <p>
              Turnkey solutio for both private and public services.
            </p>
            <div style={{ marginTop: 'auto' }}>
            <Link to="/about/about-dark" className="custom-font more main-color">
              Read More
            </Link>
            </div>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/pexels6.jpg)", display: 'flex', flexDirection: 'column' }}
          >
            <h6 className="numb">06</h6>
            <h5>Eco-Focused Initiatives</h5>
            <p>
              EV AMbulance Technology Drive
            </p>
            <div style={{ marginTop: 'auto' }}>
            <Link to="/about/about-dark" className="custom-font more main-color">
              Read More
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services6;
