import React from "react";
import Navbar from "components/Navbar/navbar";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";

const LegacyValues = () => {
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
			<Navbar nr={navbarRef} lr={logoRef} from="legacy-values-dark" />
			<header className="valign sub-bg" style={{ minHeight: "50vh" }}>
				<div className="container">
					<div className="flex justify-content-center items-center">
						<div className="cont mb-50 text-center">
							<h1 className="color-font fw-700">
								Legacy Values
							</h1>
						</div>
					</div>

				</div>
				<div className="half sub-bg">
					<div className="circle-color">
						<div className="gradient-circle"></div>
						<div className="gradient-circle two"></div>
					</div>
				</div>
			</header>
			<Footer />
		</DarkTheme>
	);
};

export const Head = () => {
	return (
		<>
			<title>Legacy Values</title>
		</>
	)
}

export default LegacyValues;
