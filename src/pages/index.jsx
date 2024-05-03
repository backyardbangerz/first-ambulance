import React from "react";
import Navbar from "components/Navbar/navbar";
import DarkTheme from "layouts/Dark";

const IntroWithSlider = React.lazy(() => import("components/Intro-with-slider/intro-with-slider"));
const AboutUs2 = React.lazy(() => import("components/About-us2/about-us2"));
const Services6 = React.lazy(() => import("components/Services6/services6"));
const Numbers = React.lazy(() => import("components/Numbers/numbers"));
const VideoWithTestimonials = React.lazy(() => import("components/Video-with-testimonials/video-with-testimonials"));
const SkillsCircle = React.lazy(() => import("components/Skills-circle/skills-circle"));
const Clients = React.lazy(() => import("components/Clients/clients"));
const Blogs1 = React.lazy(() => import("components/blogs/Blogs1/blogs1"));
const CallToAction = React.lazy(() => import("components/Call-to-action/call-to-action"));
const Footer = React.lazy(() => import("components/Footer/footer"));



const Homepage1 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);

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
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <React.Suspense fallback={null}>
        <IntroWithSlider sliderRef={fixedSlider} />
        <div ref={MainContent} className="main-content">
          <AboutUs2 />
          <Services6 />
          <Numbers />
          <VideoWithTestimonials />
          <SkillsCircle theme="dark" />
          <Clients theme="dark" />
          <Blogs1 />
          <CallToAction />
          <Footer />
        </div>
      </React.Suspense>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>First Ambulance - Malaysia's Largest Private Abulance Firm</title>
    </>
  )
}

export default Homepage1;
