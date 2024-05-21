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
			<PagesHeader title="Team Well Being Initiatives" img="/img/portfolio/full/001.jpg" />

			<section className="intro-section section-padding pb-40">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<p>
								At First Ambulance, we recognize that our team is our greatest asset, and their well-being is paramount to our success. Our team well-being initiatives are designed to support our
								employees in every aspect of their work life. Here are some of the ways we prioritize the well-being of our team:
								<br />
								<br />
								Health and Wellness Programs: We offer comprehensive health and wellness programs that include regular health screenings, fitness challenges, and access to mental health resources. By encouraging a healthy lifestyle, we aim to ensure our team members are always at their best, both physically and mentally.
								<br /><br />
								Professional Development: Continuous learning and professional growth are encouraged at First Ambulance. We provide ongoing training and development opportunities, allowing our team to stay at the forefront of emergency medical services and patient care.
								<br /><br />
								Work-Life Balance: Understanding the demanding nature of our work, we strive to create a supportive work environment that promotes work-life balance. Flexible scheduling and time-off policies enable our team to recharge and spend quality time with their loved ones.
								<br /><br />
								Recognition and Reward Programs: Recognizing the hard work and dedication of our team members is important to us. We have recognition and reward programs in place to celebrate
								individual and team achievements, fostering a culture of appreciation and motivation.
								<br /><br />
								Supportive Workplace Culture: We foster a workplace culture where teamwork, collaboration, and open communication are the norm. Our team members are encouraged to voice their ideas and concerns, knowing they will be heard and valued.
								<br /><br />
								Safety Initiatives: The safety of our team is non-negotiable. We adhere to strict safety protocols and provide the necessary equipment and training to ensure that everyone can perform their duties safely and effectively.
								These initiatives represent our commitment to creating an environment where our team can thrive, deliver exceptional service to those in need, and feel valued and supported in their work every day.
								<br /><br />
								Enrich
							</p>
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
