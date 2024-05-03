import React from 'react'

const data = [
	{
		id: 1,
		img: "https://www.firstambulance.com.my/wp-content/uploads/2020/07/ambulance-interior-01-b.jpg"
	},
	{
		id: 2,
		img: "https://www.firstambulance.com.my/wp-content/uploads/2020/07/ambulance-interior-02-b.jpg"
	},
	{
		id: 3,
		img: "https://www.firstambulance.com.my/wp-content/uploads/2020/08/ambulance-interior-768x1138.jpg",
	},
	{
		id: 4,
		img: "https://www.firstambulance.com.my/wp-content/uploads/2020/08/ambulance-interior-02-768x1138.jpg",
	}
]

const data2 = [
	{
		id: 1,
		icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-30 h-30">
			<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
		</svg>,
		title: "20 G FORWARD TEST",
		desc: "Dynamic testing at 20g forward. All our stretchers are in compliant."
	},
	{
		id: 2,
		icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-30 h-30">
			<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
		</svg>,
		title: "AUSTRALIAN STANDARD AS / NZS",
		desc: "4535:1999 Ambulance Restraint Standard for safety and occupant protection in ambulance vehicles."
	},
	{
		id: 3,
		icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-30 h-30">
			<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
		</svg>,
		title: "Complies EN1789 of Patient Transport",
		desc: "Emergency (B Type) Intensive Care (C Type) Vehicles."
	}
]

export default function AmbulanceInteriorSectionDark() {
	return (
		<section className='py-10'>
			<div className="container">
				<div className='text-center'>
					<h2 className='color-primary font-weight-600 interior-ambulances-card-title'>AMBULANCE INTERIOR</h2>
					<p className='mt-4'>While we are taking care of patients in our ambulance, our interior layout minimises potential injury and improves working conditions for our staff and healthcare professionals</p>
				</div>

				<div className="mt-40">
					<div className="row">
						{
							data?.map((item, index) => (
								<div className="col-lg-6 col-md-12 wow fadeInRight mb-20" key={index}
									data-wow-delay={`${item.id === 1 ? ".5"
										: item.id === 2 ? ".7"
											: item.id === 3 ? ".9"
												: item.id === 4 ? "1.1" : "1.3"
										}s`}
								>
									<img className='rounded-md' src={item?.img} alt='' />
								</div>
							))
						}

					</div>
				</div>

				<div className='mt-40'>
					<div className="d-flex gap-4 w-100">
						{
							data2?.map((item, index) => (
								<div key={index}
									className="p-4 text-center rounded-md text-white category-vehicles ambulance-card-shadow wow fadeInLeft"
									data-wow-delay={`${item.id === 1
										? ".5"
										: item.id === 2
											? ".7"
											: item.id === 3
												? ".9"
												: "1.1"
										}s`}
								>
									<div>
										{item?.icon}
									</div>
									<p className='pb-2 font-weight-normal text-white'>{item?.title}</p>
									<p>{item?.desc}</p>
								</div>
							))
						}
					</div>
				</div>
			</div>
		</section>
	)
}
