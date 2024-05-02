import React from 'react'

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
						<div className="col-lg-6 col-md-12">
							<img className='rounded-md' src="https://www.firstambulance.com.my/wp-content/uploads/2020/07/ambulance-interior-01-b.jpg" alt='' />
						</div>
						<div className="col-lg-6 col-md-12">
							<img className='rounded-md' src="https://www.firstambulance.com.my/wp-content/uploads/2020/07/ambulance-interior-02-b.jpg" alt='' />
						</div>
						<div className="col-lg-6 col-md-12 mt-40">
							<img className='rounded-md' src="https://www.firstambulance.com.my/wp-content/uploads/2020/08/ambulance-interior-768x1138.jpg" alt='' />
						</div>
						<div className="col-lg-6 col-md-12 mt-40">
							<img className='rounded-md' src="https://www.firstambulance.com.my/wp-content/uploads/2020/08/ambulance-interior-02-768x1138.jpg" alt='' />
						</div>
					</div>
				</div>

				<div className='mt-40'>
					<div className="d-flex gap-4 w-100">
						<div className="p-4 text-center rounded-md text-white category-vehicles ambulance-card-shadow">
							<div>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-30 h-30">
									<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
								</svg>
							</div>
							<p className='pb-2 font-weight-normal text-white'>20 G FORWARD TEST</p>
							<p>Dynamic testing at 20g forward. All our stretchers are in compliant.</p>
						</div>
						<div className="p-4 text-center rounded-md text-white category-vehicles" style={{ background: "#18191d" }}>
							<div>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-30 h-30">
									<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
								</svg>
							</div>

							<p className='pb-2 font-weight-normal text-white'>AUSTRALIAN STANDARD AS / NZS</p>
							<p>4535:1999 Ambulance Restraint Standard for safety and occupant protection in ambulance vehicles.</p>
						</div>
						<div className="p-4 text-center rounded-md text-white category-vehicles" style={{ background: "#18191d" }}>
							<div>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-30 h-30">
									<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
								</svg>
							</div>

							<p className='pb-2 font-weight-normal text-white'>Complies EN1789 of Patient Transport</p>
							<p>Emergency (B Type) Intensive Care (C Type) Vehicles.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
