import React from "react";
import Navbar from "components/Navbar/navbar";
import Services from "components/Services/services";
import Footer from "components/Footer/footer";
import PagesHeader from "components/Pages-header";
import DarkTheme from "layouts/Dark";
import Split from "components/Split";

const EcoFocusedInitiatives = () => {
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
			<Navbar nr={navbarRef} lr={logoRef} from="eco-focused-initiatives" />
			<PagesHeader title="Eco-Focused Initiatives" img="/img/portfolio/full/006.jpg" />

			<section className="intro-section section-padding pb-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="text">
								<Split>
									<p className="text-center">
										The company undertakes several innovative initiatives, particularly in terms of eco-focus and technology. First, it has implemented eco-focused initiatives, including the EV Ambulance Technology Drive, which demonstrates its commitment to environmentally friendly practices and the adoption of cutting-edge technology in its operations. Additionally, the company has established the Nexus Operations Center, which focuses on disaster-resilient operations and integrated turnkey solutions for both private and public services. This initiative showcases the company's dedication to leveraging technology for efficient and effective emergency medical services.
										<br /> <br /> Furthermore, the company's commitment to innovation is evident in its integrated turnkey solutions, which are designed to provide comprehensive and seamless services for both private and public sectors. These initiatives demonstrate the company's proactive approach to embracing technology and eco-friendly practices to enhance its emergency medical services and
										operational efficiency.
									</p>
								</Split>
							</div>
						</div>
					</div>
				</div>
			</section>


			<Services style="4item" />

			<Footer />
		</DarkTheme>
	);
};

export const Head = () => {
	return (
		<>
			<title>Vie - Nexus Operations Centre</title>
		</>
	)
}

export default EcoFocusedInitiatives;
