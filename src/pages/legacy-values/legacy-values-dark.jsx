import React from "react";
import Navbar from "components/Navbar/navbar";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";
import Img from "../../../static/img/02.jpg"

const fourRow = [
	{ id: 1, title: "Preparedness", img: "", desc: "Equipped with the right tools, the right people, and the right skills, we ensure that we are fully prepared to handle any emergency situation that comes our way. Exceptional service: We go beyond simply operating ambulances. Our team is driven by the desire to make a real difference in people's lives. We are dedicated to providing exceptional care and support to those in need." },
	{ id: 2, title: "Lifesaving mindset", img: "", desc: "Saving lives is at the core of everything we do. We approach every situation with a mindset that is focused on the preservation and improvement of life. Continuous improvement: We are committed to constant growth and improvement. We continuously strive to enhance our skills, knowledge, and resources to provide the best possible care to our community." },
	{ id: 3, title: "Compassion and empathy", img: "", desc: "We understand that behind every call for help is a person in need. We approach each situation with compassion, empathy, and the utmost respect for the individuals we serve." },
	{ id: 4, title: "Collaboration", img: "", desc: "We believe in the power of collaboration and teamwork. By working together with our partners, medical professionals, and the community, we can achieve the best outcomes for our patients." }
]
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
			<section style={{ minHeight: "60vh" }}>
				<div className="row">
					<div className="col-md-12 col-lg-6">
						<img src={Img} alt="company image" style={{ width: "100%", height: "600px" }} />
					</div>
					<div className="col-md-12 col-lg-6">
						<div className="container flex justify-content-center flex-col items-center w-75" style={{ marginTop: "140px" }}>
							<div>
								<h3 className="color-font">Source for Company</h3>
								<p>
									We believe the finest thing a man can do with his life is to save another. For over 20 years, we've served our community
									with the highest quality emergency medical services available, armed with the right tools, the right people and right skills.
								</p>
								<div className="row mt-40">
									<div className="col-md-12 col-lg-6">
										<h3>No. 1</h3>
										<p>At FIRST Ambulance Services, we don't just operate ambulances - we're Driven to Save Lives.</p>
									</div>
									<div className="col-md-12 col-lg-6">
										<h3>No. 2</h3>
										<p>At First Ambulance Services, we are guided by a set of core values that drive our commitment to excellence in emergency medical services</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-padding">
				<div className="container">
					<div className="text-center flex justify-content-center">
						<p className="w-75">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum. Ultrices eros in cursus turpis massa. Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies.
						</p>
					</div>
					<div className="border border-gray mt-40"></div>

					<div className="py-40">
						<div className="row">
							<div className="col-md-12 col-lg-6">
								<div style={{ marginBottom: "40px" }}>
									<h5 className="color-font">Life-saving mission</h5>
									<p>
										We believe that the noblest pursuit in life is to save another. It is our calling to provide the highest quality emergency medical services to our community.
									</p>
								</div>
								<img src={Img} style={{ height: "335px" }} className="rounded-md" alt="images" />
							</div>
							<div className="col-md-12 col-lg-6">
								<div style={{ marginBottom: "40px" }}>
									<h5 className="color-font">Unwavering dedication</h5>
									<p>
										With more then 2 decades of experience, we have consistently served our community with unwavering dedication. Our commitment remains strong as we strive to deliver the best care possible.
									</p>
								</div>
								<img src={Img} style={{ height: "335px" }} className="rounded-md" alt="images" />
							</div>
						</div>
					</div>

					<div className="py-40">
						<div className="row">
							{
								fourRow.map((item, index) => (
									<div className="col-md-12 col-lg-3" key={index}>
										<h5 className="color-font" style={{ marginBottom: "30px", height: "70px" }}>{item?.title}</h5>
										<img src={Img} alt="" style={{ width: "100%", height: "335px", }} className="rounded-md" />
										<p className="pt-3">
											{item?.desc}
										</p>
									</div>
								))
							}
						</div>
					</div>


					<div className="py-40">
						<div className="row">
							<div className="col-md-12 col-lg-6">
								<img src={Img} style={{ height: "335px" }} className="rounded-md" alt="images" />
								<h5 className="color-font pt-3">Integrity and professionalism</h5>
								<p style={{ marginTop: "20px" }}>
									We uphold the highest standards of integrity and professionalism in all aspects of our work. We are committed to maintaining the trust and confidence placed in us by our community.
								</p>
							</div>
							<div className="col-md-12 col-lg-6">
								<img src={Img} style={{ height: "335px" }} className="rounded-md" alt="images" />
								<h5 className="color-font pt-3">Driven to save lives</h5>
								<p style={{ marginTop: "20px" }}>
									At First Ambulance Services, we are not just in the business of ambulance services. We are driven by our passion to save lives, making a meaningful impact on the well-being and safety of our community.
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
			<title>Legacy Values</title>
		</>
	)
}

export default LegacyValues;
