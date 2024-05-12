import Footer from 'components/Footer/footer';
import Navbar from 'components/Navbar/navbar'
import DarkTheme from 'layouts/Dark'
import React from 'react'

function CareersDark() {

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
			<header className="circle-bg valign" style={{ minHeight: "55vh" }}>
				<div className="container">
					<div className="flex justify-content-center items-center">
						<div className="cont mb-50 text-center">
							<h1 className="color-font fw-700">
								Careers at First-Ambulance
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

			<div className="container pb-40">
				<div className='row'>
					<div class="col-md-12">
						<h2>Careers at First-Ambulance</h2>
						<hr className='mt-2  mb-3 bg-primary-color' />
						<p className='my-4 text-xl' style={{ fontSize: "22px", lineHeight: "1.5" }}>
							We are looking for talented people seeking a challenging career opportunity with a world leader in public safety.
						</p>
						<ul>
							<li>
								{"	> Build a career and be rewarded for your talents."} </li>
							<li>
								{"	> Flexible schedule"}</li>
							<li>
								{"	> Work-family balance"}</li>
							<li>
								{"	> Very competitive salary"}</li>
							<li>
								{"	> RRSP (up to 5%)"}</li>
							<li>
								{"	> Parking / Bus paid"}</li>
							<li>
								{"	> Gym paid"}</li>
							<li>
								{"	> Dynamic social club"}</li>
							<li>
								{"	> Several other incentives"}</li>
						</ul>
						<p>
							<strong>At Emergensys Solutions, we enable public safety agencies throughout the world to better serve their communities!</strong>
						</p>

					</div>
				</div>
			</div>

			<div className="bg-dark py-40">
				<div className="container">
					<h3 className="color-font">CURRENT OPENINGS</h3>
					{/* job box */}
					<div className="job-box d-md-flex align-items-center justify-content-between mb-30 border rounded px-4 mt-4">
						<div className="job-left my-4 d-md-flex align-items-center flex-wrap">
							<div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
								FD
							</div>
							<div className="job-content">
								<h5 className="text-center text-md-left color-font">Front End Developer</h5>
								<ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
									<li className="mr-md-4 text-info">
										<i className="fa fa-map-marker color-font mr-1"></i> Selangor
									</li>
									<li className="mr-md-4 text-info">
										<i className="fa fa-clock mr-1"></i> Full Time
									</li>
								</ul>
							</div>
						</div>
						<div className="job-right my-4 flex-shrink-0">
							<a href={`/contact/contact-dark`} className="butn bord curve wow fadeInUp" data-wow-delay=".5s">Apply Now</a>
						</div>
					</div>
				</div>

			</div>

			<Footer />
		</DarkTheme>

	)
}


export const Head = () => {
	return (
		<>
			<title>Vie - Careers</title>
		</>
	)
}

export default CareersDark;