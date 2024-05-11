import React from "react";
import Navbar from "components/Navbar/navbar";
import Services from "components/Services/services";
import Clients from "components/Clients/clients";
import CallToAction from "components/Call-to-action/call-to-action";
import Footer from "components/Footer/footer";
import PagesHeader from "components/Pages-header";
import AboutIntro from "components/About-intro";
import Team from "components/Team/team";
import MinimalArea from "components/Minimal-Area/minimal-area";
import DarkTheme from "layouts/Dark";

const About = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} from="about-dark" />
      <PagesHeader title="Welcome to the Future of Ambulance Services." img="/img/slid/about2.jpg" />
      <AboutIntro />
      <Services style="4item" />
      <Team />
      <MinimalArea />
      <Clients theme="dark" />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>Vie - About Dark</title>
    </>
  )
}

export default About;
