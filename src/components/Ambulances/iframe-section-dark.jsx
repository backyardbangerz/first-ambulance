import YoutubeFrame from 'components/youtube-frame/YoutubeFrame'
import React from 'react'

export default function IframeSectionDark() {
	return (
		<section className='py-10'>
			<div className="intro-section section-padding">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<YoutubeFrame embedId="RJylowzYP-U" />
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
	)
}
