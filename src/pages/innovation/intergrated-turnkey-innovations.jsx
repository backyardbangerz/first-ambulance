import React from "react";
import Navbar from "components/Navbar/navbar";
import Services from "components/Services/services";
import Footer from "components/Footer/footer";
import PagesHeader from "components/Pages-header";
import DarkTheme from "layouts/Dark";
import Split from "components/Split";

const IntergratedTurnkeyInnovations = () => {
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
			<Navbar nr={navbarRef} lr={logoRef} from="intergrated-turnkey-innovations" />
			<PagesHeader title="Intergrated Turnkey Innovations" img="/img/portfolio/full/005.jpg" />

			<section className="intro-section section-padding pb-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<div className="text">
								<Split>
									<h2 className="mb-10 primary-color">
										Compliance Services:
									</h2>
									<p className="wow txt mb-10 words chars splitting" data-splitting>
										The company specializes in medical transport accreditation and compliance services, ensuring that organizations meet industry standards established by prestigious organizations like JCI, MSQH, or ISO. This includes comprehensive EMS reporting, accreditation preparation, compliance advising, and auditing to support organizations in meeting necessary benchmarks in prehospital care and patient transport.
									</p>

									<h2 className="mb-10 primary-color mt-40">
										Onsite Ambulance
									</h2>
									<p className="wow txt mb-10 words chars splitting" data-splitting>
										First Ambulance provides a wide range of ambulance vehicles, offering organizations the opportunity to access specialized vehicles without the need for procurement. Our bespoke solutions for emergency vehicles ensure that clients have access to the necessary ambulance fleet to meet their specific needs, without the burden of vehicle acquisition and maintenance. This approach allows organizations to benefit from a comprehensive range of ambulance vehicles, tailored to their requirements, while alleviating the logistical and financial challenges associated with vehicle procurement
										First Ambulance offers on-site ambulance services designed to alleviate the financial burden and reduce human resource management complexities for our clients. Our workforce is equipped to provide various levels of service, including basic life support, advanced, and critical care services. These services are tailored to meet the specific needs of our clients, ensuring that they receive the appropriate level of medical care and support on their premises. By partnering with First Ambulance, clients can benefit from a comprehensive on-site ambulance solution that prioritizes patient care and safety while minimizing administrative burdens and financial strain
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

export default IntergratedTurnkeyInnovations;
