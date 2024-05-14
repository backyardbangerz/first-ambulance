import React from "react";
import Navbar from "components/Navbar/navbar";
import Footer from "components/Footer/footer";
import ContactHeader from "components/Contact-header/contact-header";
import ContactForm from "components/Contact-form/contact-form";
import DarkTheme from "layouts/Dark";

const Contact = () => {
    const navbarRef = React.useRef(null);
    const logoRef = React.useRef(null);

    React.useEffect(() => {
        document.querySelector("body").classList.add("contact-page");

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

        return () => {
            document.querySelector("body").classList.remove("contact-page");
        };
    }, [navbarRef]);

    return (
        <DarkTheme>
            <Navbar nr={navbarRef} lr={logoRef} />
            <ContactHeader />
            <div className="main-content">
                <ContactForm />
                <div className="map" id="ieatmaps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0043861310314!2d101.64448027584426!3d3.0934911534904757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4bc778c46de5%3A0xedfb82b8230cb1aa!2s75%2C%20Jalan%20Templer%2C%20Pjs%206%2C%2046050%20Petaling%20Jaya%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2sbd!4v1715682432096!5m2!1sen!2sbd" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <Footer hideBGCOLOR />
            </div>
        </DarkTheme>
    );
};

export const Head = () => {
    return (
        <>
            <title>Vie - Contact Dark</title>
        </>
    )
}

export default Contact;
