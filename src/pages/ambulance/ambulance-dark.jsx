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
import DarkTheme from 'layouts/Dark';
import React from 'react'

function AmbulanceDark() {
	const fixedSlider = React.useRef(null);
	const MainContent = React.useRef(null);
	const navbarRef = React.useRef(null);
	const logoRef = React.useRef(null);

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
			<Footer />
		</DarkTheme>
	)
}

export default AmbulanceDark;
