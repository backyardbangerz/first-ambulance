import React from "react";
import { Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Parallax, Autoplay } from "swiper";
import removeSlashFromPagination from "common/removeSlashpagination";
import ShowcassesFullScreenData from "data/innovation-full-screen-slider.json";
import fadeWhenScroll from "common/fadeWhenScroll";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

SwiperCore.use([Navigation, Pagination, Parallax, Autoplay]);

const ShowInnovation = () => {
	const [load, setLoad] = React.useState(true);
	React.useEffect(() => {
		fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
		setTimeout(() => {
			removeSlashFromPagination();
			setLoad(false);
		}, 1000);
	}, []);

	const navigationPrevRef = React.useRef(null);
	const navigationNextRef = React.useRef(null);
	const paginationRef = React.useRef(null);

	return (
		<header className="slider slider-prlx fixed-slider showcase-full">
			<div className="swiper-container parallax-slider">
				{
					!load ? (
						<Swiper
							speed={500}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
							loop={true}
							parallax={true}
							navigation={{
								prevEl: navigationPrevRef.current,
								nextEl: navigationNextRef.current,
							}}
							pagination={{
								type: "fraction",
								clickable: true,
								el: paginationRef.current,
							}}
							onBeforeInit={(swiper) => {
								swiper.params.navigation.prevEl = navigationPrevRef.current;
								swiper.params.navigation.nextEl = navigationNextRef.current;
								swiper.params.pagination.el = paginationRef.current;
							}}
							onSwiper={(swiper) => {
								setTimeout(() => {
									for (var i = 0; i < swiper.slides.length; i++) {
										swiper.slides[i].childNodes[0].setAttribute(
											"data-swiper-parallax",
											0.75 * swiper.width
										);
									}

									swiper.params.navigation.prevEl = navigationPrevRef.current;
									swiper.params.navigation.nextEl = navigationNextRef.current;

									swiper.params.pagination.el = paginationRef.current;

									swiper.navigation.destroy();
									swiper.navigation.init();
									swiper.navigation.update();

									swiper.pagination.destroy();
									swiper.pagination.init();
									swiper.pagination.update();
								});
							}}
							className="swiper-wrapper"
							slidesPerView={1}
						>
							{
								ShowcassesFullScreenData.map((slide) => (
									<SwiperSlide key={slide.id} className="swiper-slide">
										<div
											className="bg-img valign"
											style={{ backgroundImage: `url(${slide.image})` }}
											data-overlay-dark="4"
										>
											<div className="container">
												<div className="row">
													<div className="col-lg-12">
														<div className="caption">
															<h1>
																<Link to={slide.customLink}>
																	<div className="stroke" data-swiper-parallax="-2000">
																		{slide.title.first}
																	</div>
																	<span data-swiper-parallax="-5000">
																		{slide.title.second}
																	</span>
																</Link>
																<div className="bord"></div>
															</h1>
															<div className="discover">
																<Link to={slide.exploreMoreLink}>
																	<span>
																		Explore <br /> More
																	</span>
																</Link>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
								))
							}
						</Swiper>
					)
						: null
				}
				<div className="setone setwo">
					<div
						ref={navigationNextRef}
						className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
					>
						<i className="fas fa-chevron-right"></i>
					</div>
					<div
						ref={navigationPrevRef}
						className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
					>
						<i className="fas fa-chevron-left"></i>
					</div>
				</div>
				<div ref={paginationRef} className="swiper-pagination top botm"></div>
			</div>


		</header>
	);
};

export default ShowInnovation;
