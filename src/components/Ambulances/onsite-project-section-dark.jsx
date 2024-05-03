import Split from 'components/Split'
import React from 'react'

const data = [
	{
		id: 1,
		title: "Thomson Hospital Kota Damansara",
		img: "https://www.firstambulance.com.my/wp-content/uploads/2020/06/Onsite-ambulance-services-b.jpg"
	},
	{
		id: 2,
		title: "Central Medical Facility Rapid Project Pengerang",
		img: "https://www.firstambulance.com.my/wp-content/uploads/2020/07/Central-Medical-Facility.jpg"
	},
	{
		id: 3,
		title: "Prince Court Medical Centre",
		img: "https://www.firstambulance.com.my/wp-content/uploads/2020/08/Prince-Court-Medical-Centre.jpg"
	},
	{
		id: 4,
		title: "Gleneagles Kuala Lumpur",
		img: "https://www.firstambulance.com.my/wp-content/uploads/2020/08/Gleneagles.jpg"
	},
	{
		id: 5,
		title: "Pantai Kuala Lumpur",
		img: "https://www.firstambulance.com.my/wp-content/uploads/2020/08/Pantai.jpg"
	},
	{
		id: 6,
		title: "Institute Jantung Negara",
		img: "https://www.firstambulance.com.my/wp-content/uploads/2020/08/IJN-new-b.jpg"
	},
	{
		id: 7,
		title: "Gleneagles Kuala Lumpur",
		img: "https://www.firstambulance.com.my/wp-content/uploads/2021/09/GKL-Ambulance.jpeg"
	},
	{
		id: 8,
		title: "MAEPS",
		img: "https://www.firstambulance.com.my/wp-content/uploads/2021/09/MAEPS-Standby.jpeg"
	},
	{
		id: 9,
		title: "Pantai Hospital Cheras",
		img: "https://www.firstambulance.com.my/wp-content/uploads/2021/09/Pantai-Hospital-Cheras.jpeg"
	},
	{
		id: 10,
		title: "Pantai Hospital Ampang",
		img: "https://www.firstambulance.com.my/wp-content/uploads/2021/09/Pantai-Hospital-Ampang.jpeg"
	},
	{
		id: 11,
		title: "Gleneagles Medini",
		img: "https://www.firstambulance.com.my/wp-content/uploads/2021/09/GMH-Team.jpeg"
	},
	{
		id: 12,
		title: "Tung Shin Hospital",
		img: "https://www.firstambulance.com.my/wp-content/uploads/2021/09/TSH-Team.jpeg"
	}
]

export default function OnsiteProjectSectionDark() {
	return (
		<>
			<section className='py-90'>
				<div className="container">
					<div className="onsite-ambulance">
						<h2 className='section-heading color-primary'>ONSITE AMBULANCE SERVICE</h2>
						<div className="row">
							<div className="col-lg-6 col-md-12">
								<img src="https://www.firstambulance.com.my/wp-content/uploads/2020/06/Onsite-ambulance-services-b.jpg" alt="ambulance" style={{ borderRadius: "10px" }} />
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="text">
									<Split>
										<p
											className="onsite-ambulance-text wow txt mb-10 words chars splitting"
											data-splitting
										>
											Using highly qualified, multi-disciplinarily personnel and custom designed, fully equipped ambulances, First Ambulance provides emergency medical support and services to public and private healthcare providers on a retainer basis throughout the year and are available 24/7 on call. Our strong legacy has helped us build a strong relationship with several leading healthcare institutions in the country.
										</p>
										<p className="wow txt words chars splitting" data-splitting>
											First ambulance ensures that all vehicles are built within the CEN Standards. We own and operate the largest private ambulance fleet in Malaysia and comply with the Private Healthcare Facilities and Services Regulations 2006.
										</p>
									</Split>
								</div>
								{/* <p className='onsite-ambulance-text'>
									Using highly qualified, multi-disciplinarily personnel and custom designed, fully equipped ambulances, First Ambulance provides emergency medical support and services to public and private healthcare providers on a retainer basis throughout the year and are available 24/7 on call. Our strong legacy has helped us build a strong relationship with several leading healthcare institutions in the country.
									<br />
									<br />
									First ambulance ensures that all vehicles are built within the CEN Standards. We own and operate the largest private ambulance fleet in Malaysia and comply with the Private Healthcare Facilities and Services Regulations 2006.
								</p> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='py-40'>
				<div className="container">
					<div className="onsite-project py-40">
						<h2 className='section-heading'>OUR ONSITE PROJECTS</h2>
						<div className="row">
							{
								data.map((item, i) => (

									<div key={i} className="col-lg-4 col-md-12 pb-50 gap-10 p-10px wow fadeInLeft"
										data-wow-delay={`${item.id === 1
												? ".5"
												: item.id === 2
													? ".7"
													: item.id === 3
														? ".9"
														: "1.1"
											}s`}>
										<img className='mb-20' style={{ borderRadius: "10px" }} src={item.img} alt='onsite project' />
										<p className="img-bottom-text text-center">{item.title}</p>
									</div>

								))
							}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
