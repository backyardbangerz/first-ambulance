import Footer from 'components/Footer/footer';
import Navbar from 'components/Navbar/navbar'
import { Field, Form, Formik } from 'formik';
import DarkTheme from 'layouts/Dark'
import React from 'react'


const fieldsData = [
	{
		id: 1,
		name: 'name',
		type: 'text',
		label: 'First Name',
		validate: (value) => {
			let error;
			if (!value) {
				error = 'Required';
			} else if (value.length < 3) {
				error = 'Must be 3 characters or more';
			}
			return error;
		},
	},
	{
		id: 11,
		name: 'lastName',
		type: 'text',
		label: 'Last Name',
		validate: (value) => {
			let error;
			if (!value) {
				error = 'Required';
			} else if (value.length < 3) {
				error = 'Must be 3 characters or more';
			}
			return error;
		},
	},
	{
		id: 2,
		name: 'email',
		type: 'email',
		label: 'Email',
		validate: (value) => {
			let error;
			if (!value) {
				error = 'Required';
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
				error = 'Invalid email address';
			}
			return error;
		},
	},
	{
		id: 3,
		name: "position",
		type: "text",
		label: "Position Applied For",
		validate: (value) => {
			let error;
			if (!value) {
				error = "Required";
			} else if (value.length < 3) {
				error = "Must be 3 characters or more";
			}
			return error;
		}
	},
	{
		id: 4,
		name: "phone",
		type: "text",
		label: "Phone Number",
		validate: (value) => {
			let error;
			if (!value) {
				error = "Required";
			} else if (value.length < 3) {
				error = "Must be 3 characters or more";
			}
			return error;
		}
	},

	{
		id: 6,
		name: "resume",
		type: "file",
		label: "Resume",
		validate: (value) => {
			let error;
			if (!value) {
				error = "Required";
			} else if (value.length < 3) {
				error = "Must be 3 characters or more";
			}
			return error;
		}
	},
	{
		id: 5,
		name: "cover_letter",
		type: "textarea",
		label: "Cover Letter",
		validate: (value) => {
			let error;
			if (!value) {
				error = "Required";
			} else if (value.length < 3) {
				error = "Must be 3 characters or more";
			}
			return error;
		}
	},
]

const jobTitle = [
	{
		id: 1,
		name: "Neonatal intensive care unit (NICU) nurse",
		logo: "NICU",
	},
	{
		id: 22,
		name: "Pediatric intensive care unit (PICU) nurse",
		logo: "PICU",
	},
	{
		id: 33,
		name: "Oncology Nurse",
		logo: "ON",
	},
	{
		id: 4,
		name: "Pharmacist",
		logo: "P",
	}

]

function CareersDark() {
	const messageRef = React.useRef(null);
	const fixedHeader = React.useRef(null);
	const MainContent = React.useRef(null);
	const navbarRef = React.useRef(null);
	const logoRef = React.useRef(null);

	function validateEmail(value) {
		let error;
		if (!value) {
			error = "Required";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			error = "Invalid email address";
		}
		return error;
	}

	const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));


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
			<header className="valign sub-bg" style={{ minHeight: "50vh" }}>
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

			<section className="">
				<div className="container py-40">
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
						</div>
					</div>
				</div>
			</section>

			<div className="bg-dark py-40">
				<div className="container">
					<h3 className="color-font">CURRENT OPENINGS</h3>
					{
						/* job box */
						jobTitle.map((job, index) =>
							<div key={index} className="job-box d-md-flex align-items-center justify-content-between mb-30 border rounded px-4 mt-4">
								<div className="job-left my-4 d-md-flex align-items-center flex-wrap">
									<div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
										{job.logo}
									</div>
									<div className="job-content">
										<h5 className="text-center text-md-left color-font"> {job.name}</h5>
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
									<a href="#applynow" className="butn bord curve wow fadeInUp" data-wow-delay=".5s">Apply Now</a>
								</div>
							</div>
						)
					}

				</div>
			</div>

			<div className="py-40">
				<div className="container">
					{/* online application form */}
					<div className='mt-40' id='applynow'>
						<h2 className='color-font mb-40'>Apply Online</h2>

						<div className="application-form contact">
							<div className="form md-mb50">
								<Formik
									initialValues={{
										name: "",
										email: "",
										message: "",
									}}
									onSubmit={async (values) => {
										await sendMessage(500);
										alert(JSON.stringify(values, null, 2));
										// show message

										messageRef.current.innerText =
											"Your Message has been successfully sent. I will contact you soon.";
										// Reset the values
										values.name = "";
										values.email = "";
										values.message = "";
										// clear message
										setTimeout(() => {
											messageRef.current.innerText = ''
										}, 2000)
									}}
								>
									{({ errors, touched }) => (
										<Form id="contact-form">
											<div className="messages" ref={messageRef}></div>
											<div className="controls">
												<div className="row">
													{
														fieldsData.map((field) => (
															<div key={field.id} className={`${field.type === 'textarea' ? 'col-md-12' : 'col-md-6'}`}>
																<div className="form-group">
																	<Field
																		id="form_name"
																		as={field.type === 'textarea' ? 'textarea' : 'input'}
																		type={field.type}
																		name={field.name}
																		placeholder={field.label}
																		required="required"
																	/>
																	{errors[field.name] && touched[field.name] && (
																		<div>{errors[field.name]}</div>
																	)}
																</div>
															</div>
														))
													}
												</div>
											</div>
											<button type="submit" className="butn bord">
												<span>Send Resume</span>
											</button>
										</Form>
									)}
								</Formik>
							</div>
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