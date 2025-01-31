/* eslint-disable prettier/prettier */

import Slider from "react-slick";
import { Banner, BannerContent, BannerSlider, IconItem } from "./styled";
import Link from "next/link";















export const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
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
              slidesToShow: 2,
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

export const SliderBanner = () => (
  <Banner>
    <BannerContent>
        <BannerSlider>
        <Slider {...settings}>
        <IconItem>
          <Link href="/categories/aves">
            <img src="drinks/blood mary.jpeg" alt="Blood Mary" />
            <span>Blood Mary</span>
          </Link>
        </IconItem>
        <IconItem>
          <Link href="/categories/Carnes">
            <img src="drinks/caipirinha.jpeg" alt="Carnes" />
            <span>Caipirinha</span>
          </Link>
        </IconItem>
        <IconItem>
          <Link href="/categories/Massas">
            <img src="drinks/Dry Martini.jpeg" alt="Massas" />
            <span>Dry Martini</span>
          </Link>
        </IconItem>
        <IconItem>
          <Link href="/categories/Saudavel">
            <img src="/drinks/margarita.jpeg" alt="Saudavel" />
            <span>Margarita</span>
          </Link>
        </IconItem>
        <IconItem>
          <Link href="/categories/Sobremesa">
            <img src="drinks/mojito.jpeg" alt="Sobremesa" />
            <span>Mojito</span>
          </Link>
        </IconItem>
        <IconItem>
          <Link href="/categories/Bolos e Tortas">
            <img src="drinks/moscow mule.jpg" alt="BolorsTotas" />
            <span>Moscow Mule</span>
          </Link>
        </IconItem>
        <IconItem>
          <Link href="/categories/Drinks">
            <img src="drinks/negroni.jpg" alt="Drinks" />
            <span>Negroni</span>
          </Link>
        </IconItem>
        <IconItem>
          <Link href="/categories/Salgados">
            <img src="drinks/Old Fashioned.jpeg" alt="Salgados" />
            <span>Old Fashioned</span>
          </Link>
        </IconItem>
        </Slider>
        </BannerSlider>
    </BannerContent>
  </Banner>
);
