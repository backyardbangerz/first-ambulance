import AccordionComponent from 'components/Accordion/accordion';
import AmbulanceInteriorSectionDark from 'components/Ambulances/ambulance-interior-section-dark';
import BlockquoteSectionDark from 'components/Ambulances/blockquote-section-dark';
import EnsureServiceCardDark from 'components/Ambulances/ensure-service-card-dark';
import EnsureVehiclesSectionDark from 'components/Ambulances/ensure-vehicles-section-dark';
import EquipmentSectionDark from 'components/Ambulances/equipment-section-dark';
import IframeSectionDark from 'components/Ambulances/iframe-section-dark';
import OnsiteProjectSectionDark from 'components/Ambulances/onsite-project-section-dark';
import Footer from 'components/Footer/footer';
import Navbar from 'components/Navbar/navbar';
import { Link } from 'gatsby';
import DarkTheme from 'layouts/Dark';
import React from 'react'
import Slider from 'react-slick';

const data = [
	{
		id: 1,
		img: "https://www.firstambulance.com.my/wp-content/uploads/2020/06/equipment-b.jpg",
		title1: "As an outsource ambulance service supplier, we can equip your vehicle ready to go, including Cardiac Monitoring, Inatrope support, Transport Incubators and High End Ventilators, Trauma and Medical devices.",
		title2: "With decades of experience listening to the needs of private hospital partners we have managed to model a fully adequate range of services. We can provide the level of care they intend to provide and the terrain on which they intend to deploy.",
	}
]

const transportationSection = [
	{
		id: 1,
		title: "TRANSPORTATION OF THE CRITICALLY ILL PATIENTS",
		desc1: "Inter-hospital transfers of critically ill patients from the Intensive Care Unit (ICU), High Dependency Unit (HDU) and Neonate Intensive Care Unit (NICU) remains the core focus of our service. Each transfer is managed depending on the nature of the underlying illness, co-morbidity, level of depencency and risk of deterioration during transfer. Our approach to the safe transfer of the critically ill is that the standard of care and monitoring during the transfer should be at least as good, if not better, than that of the referring hospital or base unit.",
		desc2: "At First Ambulance, we have a dedicated team of experienced Registered Nurses and Medical Assistant as part of the crew to undertake this area of specialised transport. Their knowledge, experience and training ensure clinical safety at every stage of the transfer.",

	}
]

const transportationSectionImg = [
	{
		id: 1,
		img: "https://www.firstambulance.com.my/wp-content/uploads/2020/06/ambulance-transportation.jpg",
	}
]

const payParAmbulance = [
	{
		id: 1,
		title: "PAY PER USE AMBULANCE SERVICE AND WHEELCHAIR VEHICLES",
		desc: "First Ambulance emergency medical services are accessible to the public across the country. Our ambulances respond to a wide range of emergencies, from people who are critically ill, women in labour, to accident victims, or even for regular appointments using our wheelchair MPVs. Contact our hotline at 1300 88 1919 and ask for assistance to get premium service throughout Malaysia and are confident that we will contribute value to your operations through our fully integrated turn key solution whilst at the same time offering the strength of our company. Our safety track record is second to none."
	}
]

const payParAmbulanceImg = [
	{
		id: 1,
		img: "https://www.firstambulance.com.my/wp-content/uploads/2020/06/Pay-per-use-ambulance-b.jpg",
	}
]

function AmbulanceDark() {
	const fixedSlider = React.useRef(null);
	const MainContent = React.useRef(null);
	const navbarRef = React.useRef(null);
	const logoRef = React.useRef(null);
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3
	};

	React.useEffect(() => {
		setInterval(() => {
			if (fixedSlider.current) {
				var slidHeight = fixedSlider.current.offsetHeight;
			}
			if (MainContent.current) {
				MainContent.current.style.marginTop = slidHeight + "px";
			}
		}, 1000);

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
	}, [fixedSlider, MainContent, navbarRef]);


	return (
		<DarkTheme>
			<Navbar nr={navbarRef} lr={logoRef} />
			<section className='ambulance-header position-relative ambulance-header-text'>
				<h2 className='text-center font-weight-bolder text-43'>ONSITE <br /> AMBULANCE</h2>
			</section>
			<IframeSectionDark />
			<BlockquoteSectionDark />
			<OnsiteProjectSectionDark />
			<section className="bg-dark">
				<div className="container equipment-section ">
					<h2 className="section-heading color-primary interior-ambulances-card-title">OUR EQUIPMENTS</h2>
					<div className="row">
						{
							data?.map((item, index) => (
								<>
									<div key={index} className="col-lg-6 col-md-12 wow fadeInLeft"
										data-wow-delay={`${item?.id === 1
											? ".5"
											: feature.id === 3
												? ".9"
												: "1.1"
											}s`}>
										<img src='https://www.firstambulance.com.my/wp-content/uploads/2020/06/equipment-b.jpg' alt='equipment' style={{ borderRadius: "10px" }} />
									</div>
									<div className="col-lg-6 col-md-12 wow fadeInLeft">
										<p className='onsite-ambulance-text'>
											As an outsource ambulance service supplier, we can equip your vehicle ready to go, including Cardiac Monitoring, Inatrope support, Transport Incubators and High End Ventilators, Trauma and Medical devices.
											<br />
											<br />
											With decades of experience listening to the needs of private hospital partners we have managed to model a fully adequate range of services. We can provide the level of care they intend to provide and the terrain on which they intend to deploy.
										</p>
									</div>

								</>
							))
						}
					</div>

					<div className='py-10'>
						<EnsureVehiclesSectionDark />
						<EnsureServiceCardDark />
						<EquipmentSectionDark />
					</div>
				</div>
			</section>

			{/* AMBULANCE INTERIOR */}
			<AmbulanceInteriorSectionDark />


			<section className='bg-dark'>
				<div className="container py-10">
					<div className="row">
						{
							transportationSection?.map((item, index) => (
								<div key={index} className="col-lg-6 col-md-12 mb-50 wow fadeInLeft" data-wow-delay={`${item.id === 1
									? ".5"
									: "1.1"
									}s`}>
									<div>
										<p className='color-primary interior-ambulances-card-title'>{item?.title}</p>
										<p className='mt-4 letter-spacing-1'>
											{item?.desc1}
											<br /><br />
											{item?.desc2}
										</p>
									</div>
								</div>
							))
						}
						{
							transportationSectionImg?.map((item, index) => (
								<div key={index} className="col-lg-6 col-md-12 mb-50 wow fadeInLeft" data-wow-delay={`${item.id === 1
									? ".5"
									: "1.1"
									}s`}>
									<img className='img-fluid rounded-md' src="https://www.firstambulance.com.my/wp-content/uploads/2020/07/transportation-of-critically-ill-b.jpg" alt="" />
								</div>
							))
						}

						{
							payParAmbulanceImg?.map((item, index) => (
								<div key={index} className="col-lg-6 col-md-12 mt-40 mb-50 wow fadeInRight" data-wow-delay={`${item.id === 1
									? ".5"
									: "1.1"
									}s`}>
									<img className='img-fluid rounded-md' src={item?.img} alt="" />
								</div>
							))
						}
						{
							payParAmbulance?.map((item, index) => (
								<div key={index} className="col-lg-6 col-md-12 mt-40 mb-50 wow fadeInRight"
									data-wow-delay={`${item.id === 1
										? ".5"
										: "1.1"
										}s`}
								>
									<div>
										<p className='color-primary interior-ambulances-card-title'>{item?.title}</p>
										<p className='mt-4'>
											{item?.desc}
										</p>
									</div>
								</div>
							))
						}

					</div>
				</div>
			</section>


			<section className='py-10'>
				<div className="container">
					<h2 className='text-center mb-30 color-primary interior-ambulances-card-title font-weight-600'>OUR PARTNERS</h2>
					<Slider {...settings}>
						<div>
							<img src="https://www.firstambulance.com.my/wp-content/uploads/2020/06/Gleneagles-KL.png" alt="" />
						</div>

						<div>
							<img src="https://www.firstambulance.com.my/wp-content/uploads/2020/06/Pantai-Hospitals.png" alt="" />
						</div>

						<div>
							<img src="https://www.firstambulance.com.my/wp-content/uploads/2020/06/Petronas.png" alt="" />
						</div>

						<div>
							<img src="https://www.firstambulance.com.my/wp-content/uploads/2020/06/Petronas.png" alt="" />
						</div>

						<div>
							<img src="https://www.firstambulance.com.my/wp-content/uploads/2020/06/Prince-Court-Medical-Centre.png" alt="" />
						</div>
						<div>
							<img src="https://www.firstambulance.com.my/wp-content/uploads/2020/06/Ramsay-Sime-Darby.png" alt="" />
						</div>
						<div>
							<img src="https://www.firstambulance.com.my/wp-content/uploads/2020/06/Thomson-Hospital-KD.png" alt="" />
						</div>
						<div>
							<img src="https://www.firstambulance.com.my/wp-content/uploads/2020/06/Columbia-Asia-Hospitals.png" alt="" />
						</div>

					</Slider>

					<div className='mt-50 text-center'>
						<h2 className='pt-40 color-primary interior-ambulances-card-title font-weight-600'>WANT TO PARTNER UP WITH US?</h2>
						<Link to={`/contact/contact-dark`} className=" mt-40 butn bord curve wow fadeInUp" data-wow-delay=".5s">REQUEST FOR DEMO</Link>
					</div>
				</div>
			</section>

			<section className="py-10 bg-dark">
				<div className="container">
					<AccordionComponent />
				</div>
			</section>

			<div style={{ marginTop: "80px" }} className='position-relative'>
				<svg style={{ height: "14px", right: "25%", bottom: "-14px" }} className='position-absolute bottom-0' fill='#ea0029' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 10" preserveAspectRatio="none">
					<path class="elementor-shape-fill" d="M350,10L340,0h20L350,10z"></path>
				</svg>
				<div className='p-2 py-4 d-flex justify-content-center align-items-center gap-6 bg-primary-color'>
					<a href="tel:1300 88 1919" style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center", fontWeight: "600", color: "white", fontSize: "18px" }}>
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" style={{ width: "23px", height: "29px" }}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
							</svg>
						</span>
						<span>EMERGENCY CALL CENTER: <font>1300 88 1919</font> </span>
					</a>

					<a href="tel:1300 88 1919" style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center", fontWeight: "600", color: "white", fontSize: "18px" }}>
						<span>
							<svg fill="white" width="23px" height="29px" viewBox="0 -32 576 576" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8l108.9 114.2zm290 77.6c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6 3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"></path></g></svg>
						</span>
						<span>IDD: : <font>+603 7785 1919</font> </span>
					</a>
				</div>
			</div>
			<Footer />
		</DarkTheme>
	)
}

export default AmbulanceDark;
