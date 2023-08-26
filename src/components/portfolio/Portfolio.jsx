import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { themeContext } from "../../Context";
import { GithubFinder, MagicGame, PMS } from "../../img";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://project-management-site.vercel.app/" target="_blank">
            <img src={PMS} alt="Project Management System" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://hassan5022.github.io/Github-Finder/" target="_blank">
            <img src={GithubFinder} alt="Github Finder" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://react-magic-game.web.app/" target="_blank">
            <img src={MagicGame} alt="MAgic Game" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://youtube-clone-site.vercel.app" target="_blank">
            <img src={GithubFinder} alt="Youtube Clone" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
