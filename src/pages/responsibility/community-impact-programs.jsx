import React from "react";
import Navbar from "components/Navbar/navbar";
import Services from "components/Services/services";
import Footer from "components/Footer/footer";
import PagesHeader from "components/Pages-header";
import DarkTheme from "layouts/Dark";
import Split from "components/Split";

const CommunityImpactPrograms = () => {
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
			<PagesHeader title="Community Impact Programs" img="/img/portfolio/full/002.jpg" />

			<section className="intro-section section-padding pb-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="text">
								<Split>
									<p className="text-center">First Ambulance is passionately dedicated to saving lives and making a meaningful impact in our community. Our Community Impact Program focuses on initiatives that go beyond emergency medical services, aiming to contribute positively to the well- being and safety of the community we serve</p>
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
			<title>Vie - Team Wellbeing Initiatives</title>
		</>
	)
}

export default CommunityImpactPrograms;
