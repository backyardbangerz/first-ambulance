import React from "react";
import Navbar from "components/Navbar/navbar";
import Clients from "components/Clients/clients";
import CallToAction from "components/Call-to-action/call-to-action";
import Footer from "components/Footer/footer";
import PagesHeader from "components/Pages-header";
import AboutIntro from "components/About-intro";
import DarkTheme from "layouts/Dark";

const Strategic = () => {
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
			<Navbar nr={navbarRef} lr={logoRef} from="strategic-direction-dark" />
			<PagesHeader title="Welcome to the Future of Ambulance Services." img="/img/slid/about2.jpg" />
			<AboutIntro />
			<Clients theme="dark" />
			<CallToAction />
			<Footer />
		</DarkTheme>
	);
};

export const Head = () => {
	return (
		<>
			<title>Vie - Strategic</title>
		</>
	)
}

export default Strategic;
