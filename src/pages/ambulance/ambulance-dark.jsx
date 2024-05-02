import AccordionComponent from 'components/Accordion/accordion';
import AmbulanceInteriorSectionDark from 'components/Ambulances/ambulance-interior-section-dark';
import BlockquoteSectionDark from 'components/Ambulances/blockquote-section-dark';
import EnsureServiceCardDark from 'components/Ambulances/ensure-service-card-dark';
import EnsureVehiclesSectionDark from 'components/Ambulances/ensure-vehicles-section-dark';
import EquipmentSectionDark from 'components/Ambulances/equipment-section-dark';
import IframeSectionDark from 'components/Ambulances/iframe-section-dark';
import OnsiteProjectSectionDark from 'components/Ambulances/onsite-project-section-dark';
import SectionHeaderDark from 'components/Ambulances/section-header-dark';
import Footer from 'components/Footer/footer';
import Navbar from 'components/Navbar/navbar';
import { Link } from 'gatsby';
import DarkTheme from 'layouts/Dark';
import React from 'react'
import Slider from 'react-slick';

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
			{/* <PageHeader title="ONSITE AMBULANCE." /> */}
			<SectionHeaderDark />
			<IframeSectionDark />
			<BlockquoteSectionDark />
			<OnsiteProjectSectionDark />
			<section className="bg-dark">
				<div className="container equipment-section ">
					<h2 className="section-heading">OUR EQUIPMENTS</h2>
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<img src='https://www.firstambulance.com.my/wp-content/uploads/2020/06/equipment-b.jpg' alt='equipment' style={{ borderRadius: "10px" }} />
						</div>
						<div className="col-lg-6 col-md-12">

							As an outsource ambulance service supplier, we can equip your vehicle ready to go, including Cardiac Monitoring, Inatrope support, Transport Incubators and High End Ventilators, Trauma and Medical devices.
							<br />
							<br />
							With decades of experience listening to the needs of private hospital partners we have managed to model a fully adequate range of services. We can provide the level of care they intend to provide and the terrain on which they intend to deploy.
						</div>
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
						<div className="col-lg-6 col-md-12 mb-50">
							<div>
								<p className='color-primary interior-ambulances-card-title'>TRANSPORTATION OF THE CRITICALLY ILL PATIENTS</p>
								<p className='mt-4'>
									Inter-hospital transfers of critically ill patients from the Intensive Care Unit (ICU), High Dependency Unit (HDU) and Neonate Intensive Care Unit (NICU) remains the core focus of our service. Each transfer is managed depending on the nature of the underlying illness, co-morbidity, level of depencency and risk of deterioration during transfer. Our approach to the safe transfer of the critically ill is that the standard of care and monitoring during the transfer should be at least as good, if not better, than that of the referring hospital or base unit.
									<br /><br />
									At First Ambulance, we have a dedicated team of experienced Registered Nurses and Medical Assistant as part of the crew to undertake this area of specialised transport. Their knowledge, experience and training ensure clinical safety at every stage of the transfer.
								</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-12 mb-50">
							<img className='img-fluid rounded-md' src="https://www.firstambulance.com.my/wp-content/uploads/2020/07/transportation-of-critically-ill-b.jpg" alt="" />
						</div>

						<div className="col-lg-6 col-md-12 mt-40 mb-50">
							<img className='img-fluid rounded-md' src="https://www.firstambulance.com.my/wp-content/uploads/2020/06/Pay-per-use-ambulance-b.jpg" alt="" />
						</div>

						<div className="col-lg-6 col-md-12 mt-40 mb-50">
							<div>
								<p className='color-primary interior-ambulances-card-title'>PAY PER USE AMBULANCE SERVICE AND WHEELCHAIR VEHICLES</p>
								<p className='mt-4'>
									First Ambulance emergency medical services are accessible to the public across the country. Our ambulances respond to a wide range of emergencies, from people who are critically ill, women in labour, to accident victims, or even for regular appointments using our wheelchair MPVs. Contact our hotline at 1300 88 1919 and ask for assistance to get premium service throughout Malaysia and are confident that we will contribute value to your operations through our fully integrated turn key solution whilst at the same time offering the strength of our company. Our safety track record is second to none.
								</p>
							</div>
						</div>

					</div>
				</div>
			</section>


			<section className='py-10'>
				<div className="container">
					<h2 className='text-center mb-30 color-primary font-weight-bold'>OUR PARTNERS</h2>
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
						<h2 className='pt-40 color-primary'>WANT TO PARTNER UP WITH US?</h2>
						<Link to={`/contact/contact-dark`} className=" mt-40 butn bord curve wow fadeInUp" data-wow-delay=".5s">REQUEST FOR DEMO</Link>
					</div>
				</div>
			</section>

			<section className="py-10 bg-dark">
				<div className="container">
					<AccordionComponent />
				</div>
			</section>

			<Footer />
		</DarkTheme>
	)
}

export default AmbulanceDark;
