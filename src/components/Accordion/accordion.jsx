import React from 'react'

const accordionContent = [
	{
		id: 1,
		title: 'Why should you outsource?',
		content: "Operating an ambulance service has become increasingly challenging for every provider in both the public and private sectors. One option toward addressing today’s challenges is to outsource your prehospital care logistics to us. In a short term, First Ambulance can improve your efficiency and service delivery by managing your ambulance services."
	},
	{
		id: 2,
		title: 'Do you have a ventilator and trained staff?',
		content: 'Yes, we have best in class ventilators designed for prehospital care. All of our ambulances are completely configured and equipped for mission critical transports.'
	},
	{
		id: 3,
		title: 'How fast can you send a backup ambulance?',
		content: "Our concern is to successfully meet the demands of our customers. As part of our business continuity plan FAS will ensure immediate replacement of ambulance incase primary ambulance is out for call."
	},
	{
		id: 4,
		title: "Who takes care of maintenance?",
		content: "The maintenance and repair of our ambulances and medical devices are provided by our own technical department."
	}
]
export default function AccordionComponent() {
	const [openAccordion, setOpenAccordion] = React.useState(null);

	const toggleAccordion = (index) => {
		setOpenAccordion(openAccordion === index ? null : index);
	};
	return (
		<div>
			<div className='text-center'>
				<h3 className='color-primary font-weight-600 accordion-top-heading interior-ambulances-card-title'>STILL ON THE FENCE?</h3>
				<p className='mt-4 mb-40'>Here are our answers to frequently asked questions by our partners.</p>
			</div>
			<div id="accordion">
				{
					accordionContent.map((item, i) => (
						<div className="accordion-item">
							<div className="accordion-item-header cursor-pointer" id={`heading${i}`}>
								<div
									className="accordion-button"
									data-toggle="collapse"
									data-target={`#collapse${i}`}
									aria-expanded={openAccordion === i}
									aria-controls={`collapse${i}`}
									onClick={() => toggleAccordion(i)}
								>
									<div className="flex items-center gap-2">
										<i className={`fas accordion-icon ${openAccordion === i ? 'fa-chevron-up' : 'fa-chevron-right'}`}></i>
										<p className={`font-size-18 font-weight-600 ${openAccordion === i ? 'accordion-item-color' : ''}`}>{item?.title}</p>
									</div>
								</div>
							</div>

							<div id={`collapse${i}`} className={`collapse `} aria-labelledby={`heading${i}`} data-parent="#accordion">
								<div className="accordion-body text-white">
									<p className='accordion-content'>
										{item?.content}
									</p>
								</div>
							</div>
						</div>
					))
				}
				{/* Add more accordion items here */}
			</div>
		</div>
	)
}
