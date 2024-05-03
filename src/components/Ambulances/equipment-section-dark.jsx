import Split from 'components/Split'
import React from 'react'

export default function EquipmentSectionDark() {
	return (
		<div className="ambulance-card pt-40">
			<h2 className='vehicles-heading text-center interior-ambulances-card-title color-primary'>EQUIPMENT</h2>
			<div className='d-flex gap-4 mb-50'>
				<div className='d-flex gap-4'>
					<img style={{ borderRadius: "15px 15px 15px 15px", width: "540px", height: "337px" }} src="https://www.firstambulance.com.my/wp-content/uploads/2020/07/zoll-x-series.jpg" alt="" />
					<div>
						<Split>
							<p className='mb-25 onsite-ambulance-text wow words chars splitting data-splitting'>
								<span className='font-weight-600'>Zoll X Series</span>	delivers the capabilities you expect from a full-featured monitor designed for use with all patients, from neonates through adults.
							</p>
							<p className='mb-25 font-weight-600 color-white onsite-ambulance-text wow words chars splitting" data-splitting'>
								X Series features:
							</p>
							<ul className='ml-45'>
								<li className='list-style'>Real CPR Help® technology to nearly triple the odds of your patients surviving cardiac arrest</li>
								<li className='list-style'>Open 12-lead capabilities to reduce time-to-balloon by interfacing with all leading ECG management and STEMI systems</li>
								<li className='list-style'>Cutting-edge open communication, including integrated WiFi, to simplify transmission and charting</li>
							</ul>
						</Split>
					</div>
				</div>
			</div>

			<div className='d-flex flex-md-column gap-4 mt-40'>
				<div className='d-flex gap-4'>
					<img style={{ borderRadius: "15px 15px 15px 15px", width: "540px", height: "337px" }} src="https://www.firstambulance.com.my/wp-content/uploads/2020/07/zoll-emv-portable.jpg" alt="" />
					<div>
						<Split>
							<p className='mb-25 font-weight-600 color-white onsite-ambulance-text wow words chars splitting data-splitting'>
								Zoll EMV+ Portable Ventilator
							</p>
							<p className='letter-spacing-1'>
								Designed to meet military and civilian transport standards, the versatile EMV+ portable ventilator is ideal for air medical and ambulance transport of infants (≥5kg), pediatric patients, and adults.
							</p>
						</Split>
					</div>
				</div>
			</div>

		</div>
	)
}
