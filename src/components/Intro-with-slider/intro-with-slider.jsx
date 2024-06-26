import React from "react";
import { Link } from "gatsby";
import introData from "data/sections/intro.json";
import { Swiper, SwiperSlide } from "swiper/react";
import removeSlashFromPagination from "common/removeSlashpagination";
import fadeWhenScroll from "common/fadeWhenScroll";

import SwiperCore, { Navigation, Pagination, Parallax, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";


SwiperCore.use([Navigation, Pagination, Parallax, Autoplay]);

const IntroWithSlider = ({ sliderRef }) => {
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
        <header
            ref={sliderRef}
            className="slider slider-prlx fixed-slider text-center"
        >
            <div className="swiper-container parallax-slider">
                {!load ? (
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
                        {introData.map((slide) => (
                            <SwiperSlide key={slide.id} className="swiper-slide">
                                <div
                                    className="bg-img valign"
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                    data-overlay-dark="6"
                                >
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8 col-md-10">
                                                <div className="caption center mt-30">
                                                    <h1 className="color-font">{slide.title}</h1>
                                                    {slide?.content && <p>{slide.content}</p>}
                                                    <Link to="/about/about-dark" className="butn bord curve mt-30">
                                                        <span>Look More</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : null}
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

                <div className="social-icon">
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/firstambulance/" className="icon">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/firstambulance/" className="icon">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@firstambulance5810" className="icon">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/first-ambulance-services" className="icon">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default IntroWithSlider;
