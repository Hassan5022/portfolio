import React, { useContext } from "react";
import "./Portfolio.css";
import "swiper/css";
import { themeContext } from "../../Context";
import { GithubFinder, MagicGame, PMS, Youtube } from "../../img";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <div className="swiper-container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper portfolio-slider"
        >
          <SwiperSlide>
            <a href="https://youtube-clone-site.vercel.app" target="_blank">
              <img src={Youtube} alt="Youtube Clone" />
            </a>
            <p className="title">Youtube Clone</p>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://project-management-site.vercel.app/"
              target="_blank"
            >
              <img src={PMS} alt="Project Management System" />
            </a>
            <p className="title">Project Management System</p>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://hassan5022.github.io/Github-Finder/"
              target="_blank"
            >
              <img src={GithubFinder} alt="Github Finder" />
            </a>
            <p className="title">Github Finder</p>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://react-magic-game.web.app/" target="_blank">
              <img src={MagicGame} alt="MAgic Game" />
            </a>
            <p className="title">Magic Square</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
