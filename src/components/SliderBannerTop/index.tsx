/* eslint-disable prettier/prettier */

import Slider from "react-slick";
import { Banner, BannerContent, BannerSlider, IconItem } from "./styled";
import Link from "next/link";















export const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    focusOnSelect: true,
    centerMode: true,
    arrows: false,
    centerPadding: '60px',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
              centerMode: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              centerPadding: '80px',
            },
          },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

export const SliderBannerTop = () => (
  <Banner>
    <BannerContent>
        <BannerSlider>
        <Slider {...settings}>
        <IconItem>
          <Link href="/categories/aves">
            <img src="SazonalNatal.svg" alt="Receitas especiais de Natal" />
          </Link>
        </IconItem>
        </Slider>
        </BannerSlider>
    </BannerContent>
  </Banner>
);
