import YoutubeFrame from 'components/youtube-frame/YoutubeFrame'
import React from 'react'

export default function IframeSectionDark() {
	return (
		<section className='py-90'>
			<div className="intro-section section-padding">
				<div className="container">
					<div className="row">
						{
							Array.from({ length: 1 }).map((_, index) => (
								<div key={index} className="col-lg-6 col-md-12 wow fadeInLeft" data-wow-delay={`${index === 0
									? ".5"
									: "1.1"
									}s`}>
									<YoutubeFrame embedId="8Y9HZjQIcZw" />
								</div>

							))
						}
						{
							Array.from({ length: 1 }).map((_, index) => (
								<div key={index} className="col-lg-6 col-md-12 display-relative wow fadeInRight" data-wow-delay={`${index === 0
									? ".5"
									: "1.1"
									}s`}>
									<div class="flip-card">
										<div class="flip-card-inner">
											<div class="flip-card-front">
												<div className='bg-gray-400 rounded-md flex' style={{ padding: "45px", height: "380px" }}>
													<div className='flex flex-col items-center justify-center'>
														<p className='flip-box__layer__title'>12 LEAD TRANSMISSION</p>
														<p>
															Ability to transmit on scene or in transit 12 Lead ECG directly to Cardiologist thereby shortening the Door to Ballon time.
															<br />
															<br />
															<b>
																<u className='text-black font-weight-bold'>LEARN MORE</u>
															</b>
														</p>
													</div>
												</div>
											</div>
											<div class="flip-card-back">
												<div className='bg-primary-color rounded-md' style={{ padding: "25px 45px", height: "380px" }}>
													<p className='flip-box__layer__desc text-white'>
														When a patient is determined to be experiencing a potential heart attack, our paramedics will obtain a 12-lead ECG that will be interpreted. If the Paramedic finds any abnormality in the ECG, the tracing will be transmitted to the receiving hospital. Once the hospital receives the tracing, it is evaluated by a physician who will confirm the evaluation made by the Paramedic.
														With this advancement, receiving hospitals can direct the ambulance crew to bypass the emergency room and take the patient directly to the cardiac catheterization lab where the patient will receive definitive treatment to remove the occlusion or obstruction ending the heart attack. This time saving prevents further damage to the patient's heart and greatly improves the patient's outcome.
													</p>

												</div>
											</div>
										</div>
									</div>
								</div>
							))
						}
					</div>
				</div>
			</div>
		</section>
	)
}
