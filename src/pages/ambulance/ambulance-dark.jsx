import Footer from 'components/Footer/footer';
import Navbar from 'components/Navbar/navbar';
import PageHeader from 'components/Page-header/page-header';
import YoutubeFrame from 'components/youtube-frame/YoutubeFrame';
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
			<PageHeader
				title="ONSITE AMBULANCE."
			/>
			<section className='py-10'>
				<div className="intro-section section-padding">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-12">
								<YoutubeFrame embedId="wHcSfKu7bQ8" />
							</div>
							<div className="col-lg-6 col-md-12">
								<div class="flip-card">
									<div class="flip-card-inner">
										<div class="flip-card-front" style={{ background: "red" }}>
											<h2>12 LEAD TRANSMISSION</h2>
											<p>
												Ability to transmit on scene or in transit 12 Lead ECG directly to Cardiologist thereby shortening the Door to Ballon time.
												<br />
												<br />
												<b>
													<u>LEARN MORE</u>
												</b>
											</p>
										</div>
										<div class="flip-card-back">
											<p>
												When a patient is determined to be experiencing a potential heart attack, our paramedics will obtain a 12-lead ECG that will be interpreted. If the Paramedic finds any abnormality in the ECG, the tracing will be transmitted to the receiving hospital. Once the hospital receives the tracing, it is evaluated by a physician who will confirm the evaluation made by the Paramedic.
												With this advancement, receiving hospitals can direct the ambulance crew to bypass the emergency room and take the patient directly to the cardiac catheterization lab where the patient will receive definitive treatment to remove the occlusion or obstruction ending the heart attack. This time saving prevents further damage to the patient's heart and greatly improves the patient's outcome.						</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>

			</section>
			<section className='p-10  position-relative' style={{ background: "#EA0029" }}>
				<div>
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12">
								<div className='position-absolute'>
									<svg width="64px" height="64px" viewBox="0 0 24 24" fill="#BF0023" xmlns="http://www.w3.org/2000/svg">
										<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
										<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
										<g id="SVGRepo_iconCarrier">
											<path d="M8.09 11.6314H3.4C3.48 6.96144 4.4 6.19144 7.27 4.49144C7.6 4.29144 7.71 3.87144 7.51 3.53144C7.32 3.20144 6.89 3.09144 6.56 3.29144C3.18 5.29144 2 6.51144 2 12.3214V17.7114C2 19.4214 3.39 20.8014 5.09 20.8014H8.09C9.85 20.8014 11.18 19.4714 11.18 17.7114V14.7114C11.18 12.9614 9.85 11.6314 8.09 11.6314Z" fill="#BF0023"></path>
											<path d="M18.9086 11.6314H14.2186C14.2986 6.96144 15.2186 6.19144 18.0886 4.49144C18.4186 4.29144 18.5286 3.87144 18.3286 3.53144C18.1286 3.20144 17.7086 3.09144 17.3686 3.29144C13.9886 5.29144 12.8086 6.51144 12.8086 12.3314V17.7214C12.8086 19.4314 14.1986 20.8114 15.8986 20.8114H18.8986C20.6586 20.8114 21.9886 19.4814 21.9886 17.7214V14.7214C21.9986 12.9614 20.6686 11.6314 18.9086 11.6314Z" fill="#BF0023">

											</path>
										</g></svg>
								</div>
								<p className='text-center display-sm font-weight-bold' style={{ color: "#BF0023" }}>
									SPECIALIST FOR ONSITE <br /> MEDICAL SERVICES

								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='py-10'>
				<div className="container">
					<h2 className='text-red text-center pb-1'>ONSITE AMBULANCE SERVICE</h2>
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<img src="https://www.firstambulance.com.my/wp-content/uploads/2020/06/Onsite-ambulance-services-b.jpg" alt="ambulance" style={{ borderRadius: "10px" }} />
						</div>
						<div className="col-lg-6 col-md-12">
							<p>
								Using highly qualified, multi-disciplinarily personnel and custom designed, fully equipped ambulances, First Ambulance provides emergency medical support and services to public and private healthcare providers on a retainer basis throughout the year and are available 24/7 on call. Our strong legacy has helped us build a strong relationship with several leading healthcare institutions in the country.
								<br />
								<br />
								First ambulance ensures that all vehicles are built within the CEN Standards. We own and operate the largest private ambulance fleet in Malaysia and comply with the Private Healthcare Facilities and Services Regulations 2006.
							</p>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</DarkTheme>
	)
}

export default AmbulanceDark;
