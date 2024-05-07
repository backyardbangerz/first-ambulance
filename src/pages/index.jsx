import React from "react";
import Navbar from "components/Navbar/navbar";
import DarkTheme from "layouts/Dark";

import IntroWithSlider from "components/Intro-with-slider/intro-with-slider";
import AboutUs2 from "components/About-us2/about-us2";
import Services6 from "components/Services6/services6";
import Numbers from "components/Numbers/numbers";
import VideoWithTestimonials from "components/Video-with-testimonials/video-with-testimonials";
import SkillsCircle from "components/Skills-circle/skills-circle";
import Clients from "components/Clients/clients";
import Blogs1 from "components/blogs/Blogs1/blogs1";
import CallToAction from "components/Call-to-action/call-to-action";
import Footer from "components/Footer/footer";



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
