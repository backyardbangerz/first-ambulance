import React from 'react'

const data = [
	{
		id: 1,
		title: "Team Wellbeing Initiatives",
		desc: "A company is only good as its employee",
		btn: "> more on our Team",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgz9rnpejM1RiFvIKiZMHfr9o32A2WJBK_iNSpStZzbAECON_2JG80mw_6-ZfgkaThq20&usqp=CAU"
	},
	{
		id: 2,
		title: "Community Impact Program",
		desc: "We are pationetly dedicated to saving lives, making a meaningful impact in our community",
		btn: "> more on society",
		img: "https://dims.apnews.com/dims4/default/49af519/2147483647/strip/true/crop/4841x3226+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ff1%2F64%2F5f76bbf21b517d625e5d343d75a2%2F1a4a8a3a6de245b18a15029b6b3eed89"
	},
	{
		id: 3,
		title: "Making Vehicle Special",
		desc: "Bespoke Solulatin for Emergency Vehicles",
		btn: "> more on EMS Vehicles",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dYmOZHYAAAWTWHsXyh15F9MWmxx6eaAb0twv52VXjvQfztLLWiS0OsyaAeI-mq-2PXE&usqp=CAU"
	},
]

export default function Responsibility() {
	return (
		<div className="container">
			<h2 className='section-heading'>RESPONSIBILITY</h2>
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
							<h3 className={`img-bottom-text`}>{item.title}</h3>
							<p className='mt-4 text-white'>{item.desc}</p>
							<a href="#" className='mt-4'>{item?.btn}</a>
						</div>

					))
				}
			</div>
		</div>
	)
}
