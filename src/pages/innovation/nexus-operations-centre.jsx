import React from "react";
import Navbar from "components/Navbar/navbar";
import Services from "components/Services/services";
import Footer from "components/Footer/footer";
import PagesHeader from "components/Pages-header";
import DarkTheme from "layouts/Dark";
import Split from "components/Split";

const NexusOperationsCentre = () => {
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
			<Navbar nr={navbarRef} lr={logoRef} from="nexus-operations-centre" />
			<PagesHeader title="Nexus Operations Centre" img="/img/portfolio/full/004.jpg" />

			<section className="intro-section section-padding pb-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="text">
								<Split>
									<p className="text-center">Our Nexus Operations Center is at the forefront of disaster-resilient operations and integrated turnkey solutions. This state-of-the-art command center allows us to efficiently coordinate emergency responses and provide seamless support for both private and public services. We are committed to leveraging technology and expertise to ensure the highest level of preparedness and response in emergency situations</p>
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

export default NexusOperationsCentre;
