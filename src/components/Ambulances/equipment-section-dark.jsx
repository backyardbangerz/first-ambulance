import React from 'react'

export default function EquipmentSectionDark() {
	return (
		<div className="ambulance-card pt-40">
			<h2 className='vehicles-heading text-center'>EQUIPMENT</h2>
			<div className='d-flex gap-4 mb-50'>
				<div className='d-flex gap-4'>
					<img style={{ borderRadius: "15px 15px 15px 15px", width: "540px", height: "337px" }} src="https://www.firstambulance.com.my/wp-content/uploads/2020/07/zoll-x-series.jpg" alt="" />
					<div>
						<p className='mb-10'>
							<strong>Zoll X Series</strong>	delivers the capabilities you expect from a full-featured monitor designed for use with all patients, from neonates through adults.
						</p>
						<p className='mb-10'>
							<strong>X Series features:</strong>
						</p>
						<ul>
							<li>Real CPR Help® technology to nearly triple the odds of your patients surviving cardiac arrest</li>
							<li>Open 12-lead capabilities to reduce time-to-balloon by interfacing with all leading ECG management and STEMI systems</li>
							<li>Cutting-edge open communication, including integrated WiFi, to simplify transmission and charting</li>
						</ul>
					</div>
				</div>
			</div>

			<div className='d-flex flex-md-column gap-4 mt-40'>
				<div className='d-flex gap-4'>
					<img style={{ borderRadius: "15px 15px 15px 15px", width: "540px", height: "337px" }} src="https://www.firstambulance.com.my/wp-content/uploads/2020/07/zoll-emv-portable.jpg" alt="" />
					<div>
						<p className='mb-10'>
							<strong>Zoll EMV+ Portable Ventilator</strong>
						</p>
						<p>
							Designed to meet military and civilian transport standards, the versatile EMV+ portable ventilator is ideal for air medical and ambulance transport of infants (≥5kg), pediatric patients, and adults.
						</p>
					</div>
				</div>
			</div>

		</div>
	)
}
