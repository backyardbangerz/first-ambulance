import React from "react";
import Navbar from "components/Navbar/navbar";
import Services from "components/Services/services";
import Footer from "components/Footer/footer";
import PagesHeader from "components/Pages-header";
import DarkTheme from "layouts/Dark";

const MakingVehiclesSpecial = () => {
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
			<Navbar nr={navbarRef} lr={logoRef} from="team-wellbeing-initiatives" />
			<PagesHeader title="Making Vehicles Special" img="/img/portfolio/full/003.jpg" />

			<section className="intro-section section-padding pb-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="text">
								<p className="text-center">
									Our commitment to excellence extends to making vehicles special. We offer bespoke solutions for emergency vehicles to enhance their effectiveness in life-saving situations. Our team is dedicated to ensuring that our vehicles are equipped with the latest technology and tailored to meet the specific needs of our clients and the community
								</p>
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
			<title>Vie - Making Vehicles Special</title>
		</>
	)
}

export default MakingVehiclesSpecial;
