import React from "react";
import Navbar from "components/Navbar/navbar";
import Footer from "components/Footer/footer";
import PagesHeader from "components/Pages-header";
import DarkTheme from "layouts/Dark";

const TeamWellbeingInitiatives = () => {
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
			<PagesHeader title="Team Wellbeing Initiatives" img="/img/portfolio/full/001.jpg" />

			<section className="intro-section section-padding pb-40">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="text">
								<p className="text-center">
									The key initiatives focused on team well-being include the implementation of Team Wellbeing Initiatives, which emphasizes the importance of the company's employees and their welfare. This is aligned with the company's belief that "a company is only as good as its employees." Additionally, the company has a strong focus on community impact through its Community Impact Programs, demonstrating its dedication to saving lives and making a meaningful impact in the community.
									<br /><br />
									These initiatives underscore the company's commitment to not only providing exceptional emergency medical services but also prioritizing the well-being of its team and making a positive difference in the community.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
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

export default TeamWellbeingInitiatives;
