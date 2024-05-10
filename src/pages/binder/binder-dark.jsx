import React from "react";
import Navbar from "components/Navbar/navbar";
import DarkTheme from "layouts/Dark";
import ShowInnovation from "components/innovation/show-innovation";
import Footer from "components/Footer/footer";
import Responsibility from "components/responsibility/Responsibility";

const BinderDark = () => {
	const fixedHeader = React.useRef(null);
	const MainContent = React.useRef(null);
	const navbarRef = React.useRef(null);
	const logoRef = React.useRef(null);

	React.useEffect(() => {
		setTimeout(() => {
			if (fixedHeader.current) {
				var slidHeight = fixedHeader.current.offsetHeight;
			}
			if (MainContent.current) {
				MainContent.current.style.marginTop = slidHeight + "px";
			}
		}, 1000);

		var navbar = navbarRef.current;

		if (navbar) {
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
		}
	}, [fixedHeader, MainContent, navbarRef]);


	return (
		<DarkTheme>
			<div className="circle-bg">
				<div className="circle-color fixed">
					<div className="gradient-circle"></div>
					<div className="gradient-circle two"></div>
				</div>
			</div>
			<Navbar nr={navbarRef} lr={logoRef} />
			<ShowInnovation />
			<Responsibility />


			{/* <div class="container">
				<h2 class="text-center mb-4">Press Page</h2>
				<hr />
				<div class="row">
					<div class="col-md-8 press-release">
						<h3>Press Releases</h3>
						<ul>
							<li><a href="#">Press Release Title 1</a> - Date</li>
							<li><a href="#">Press Release Title 2</a> - Date</li>
						</ul>
					</div>
					<div class="col-md-4">
						<h3>Contact Information</h3>
						<p>For media inquiries, please contact:</p>
						<p>Name: John Doe</p>
						<p>Email: john.doe@example.com</p>
						<p>Phone: +1234567890</p>
					</div>
				</div>
				<hr />
				<div class="media-coverage">
					<h3>Media Coverage</h3>
					<p>Check out what the media is saying about us:</p>
					<div class="row">
						<div class="col-md-4">
							<a href="#" class="btn btn-primary btn-block">News Article 1</a>
						</div>
						<div class="col-md-4">
							<a href="#" class="btn btn-primary btn-block">News Article 2</a>
						</div>
						<div class="col-md-4">
							<a href="#" class="btn btn-primary btn-block">News Article 3</a>
						</div>
					</div>
				</div>
			</div> */}

			{/* <div class="container py-5">
				<h2>Press Page</h2>
				<hr />
				<div class="row">
					<div class="col-md-8">
						<h3>Press Releases</h3>
						<ul>
							<li><a href="#">Press Release Title 1</a> - Date</li>
							<li><a href="#">Press Release Title 2</a> - Date</li>

						</ul>
					</div>
					<div class="col-md-4">
						<h3>Contact Information</h3>
						<p>For media inquiries, please contact:</p>
						<p>Name: John Doe</p>
						<p>Email: john.doe@example.com</p>
						<p>Phone: +1234567890</p>
					</div>
				</div>
				<hr />
				<h3>Media Coverage</h3>
				<p>Check out what the media is saying about us:</p>
				<div class="row">
					<div class="col-md-4">
						<a href="#" class="btn btn-primary">News Article 1</a>
					</div>
					<div class="col-md-4">
						<a href="#" class="btn btn-primary">News Article 2</a>
					</div>
					<div class="col-md-4">
						<a href="#" class="btn btn-primary">News Article 3</a>
					</div>

				</div>
			</div>


			<div class="container py-5">
				<div class="row">
					<div class="col-lg-8">
						<h2>Join Our Medical Team</h2>
						<p>Make a difference in people's lives with a career in healthcare.</p>
						<ul>
							<li>Competitive salaries</li>
							<li>Flexible work hours</li>
							<li>Opportunities for growth</li>
							<li>Contribute to saving lives</li>
						</ul>
						<a href="#positions" class="btn btn-primary">View Open Positions</a>
					</div>
					<div class="col-lg-4">
						<img src="https://static.vecteezy.com/system/resources/previews/018/769/649/non_2x/stethoscope-medical-logo-illustration-cardiogram-heart-symbol-red-color-heartbeat-and-stethoscope-icon-modern-medical-logo-design-free-vector.jpg" alt="Medical Logo" class="img-fluid" />
					</div>
				</div>
			</div>

			<div id="positions" class=" py-5">
				<div class="container">
					<h2>Open Medical Positions</h2>
					<div class="row">
						<div class="col-md-6">
							<div class="card mb-4">
								<div class="card-body text-black">
									<h5 class="card-title">Registered Nurse</h5>
									<p class="card-text">Provide compassionate care to patients in need.</p>
									<a href="#" class="btn btn-primary">Apply Now</a>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="card mb-4">
								<div class="card-body text-black">
									<h5 class="card-title">Medical Assistant</h5>
									<p class="card-text">Assist physicians in providing medical care to patients.</p>
									<a href="#" class="btn btn-primary">Apply Now</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}


			<div class="contact3 py-10">
				<div class="row no-gutters">
					<div class="container">
						<div class="row">
							<div class="col-lg-6">
								<div class="card-shadow">
									<img alt="" className="rounded" src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg" class="img-fluid" />
								</div>
							</div>
							<div class="col-lg-6">
								<div class="contact-box ml-3">
									<h1 class="font-weight-light mt-2">Quick Contact</h1>
									<form class="mt-4">
										<div class="row">
											<div class="col-lg-12">
												<div class="form-group mt-2">
													<input class="form-control bg-dark" type="text" placeholder="name" />
												</div>
											</div>
											<div class="col-lg-12">
												<div class="form-group mt-2">
													<input class="form-control bg-dark" type="email" placeholder="email address" />
												</div>
											</div>
											<div class="col-lg-12">
												<div class="form-group mt-2">
													<input class="form-control bg-dark" type="text" placeholder="phone" />
												</div>
											</div>
											<div class="col-lg-12">
												<div class="form-group mt-2">
													<textarea class="form-control bg-dark" rows="3" placeholder="message"></textarea>
												</div>
											</div>
											<div class="col-lg-12">
												<button type="submit" className="butn bord">
													<span>Send Message</span>
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="col-lg-12">
								<div class="card mt-4 border-0 mb-4 bg-dark">
									<div class="row px-4">
										<div class="col-lg-4 col-md-4">
											<div class="card-body d-flex align-items-center c-detail pl-0">
												<div class="mr-3 align-self-center">
													<img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
												</div>
												<div class="">
													<h6 class="font-weight-medium">Address</h6>
													<p class="">75, Jalan Templer, Section 6.
														<br /> Petaling Jaya, 46000
														Selangor, Malaysia.</p>
												</div>
											</div>
										</div>
										<div class="col-lg-4 col-md-4">
											<div class="card-body d-flex align-items-center c-detail">
												<div class="mr-3 align-self-center">
													<img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
												</div>
												<div class="">
													<h6 class="font-weight-medium">Phone</h6>
													<p class="">1300 88 1919
														<br /> +603 7785 1919</p>
												</div>
											</div>
										</div>
										<div class="col-lg-4 col-md-4">
											<div class="card-body d-flex align-items-center c-detail">
												<div class="mr-3 align-self-center">
													<img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
												</div>
												<div class="">
													<h6 class="font-weight-medium">Email</h6>
													<p class="">
														info@firstambulance.com.my
														<br /> mail@firstambulance.com
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</DarkTheme>
	);
};

export const Head = () => {
	return (
		<>
			<title>Vie - Innovation</title>
		</>
	)
}

export default BinderDark;
