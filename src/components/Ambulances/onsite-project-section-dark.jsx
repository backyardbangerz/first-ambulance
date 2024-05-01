import React from 'react'

export default function OnsiteProjectSectionDark() {
	return (
		<section className='py-10'>
			<div className="container">
				<div className="onsite-ambulance">
					<h2 className='section-heading'>ONSITE AMBULANCE SERVICE</h2>
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
				<div className="onsite-project py-10">
					<h2 className='section-heading'>OUR ONSITE PROJECTS</h2>
					<div className="row">
						{
							Array.from({ length: 12 }, (_, i) => (
								<div className="col-lg-4 col-md-12 pb-4">
									<img style={{ borderRadius: "10px" }} src="https://www.firstambulance.com.my/wp-content/uploads/2020/06/Onsite-ambulance-services-b.jpg" alt='onsite project' />
									<p className="img-bottom-text pt-4 text-center">Thomson Hospital Kota Damansara</p>
								</div>

							))
						}
					</div>
				</div>
			</div>
		</section>
	)
}
