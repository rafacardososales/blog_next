/* eslint-disable prettier/prettier */

import React from 'react';
import { Banner, BannerContent, BannerSlider, IconItem } from './styled';
import Slider from 'react-slick';
import Link from 'next/link';

export const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    focusOnSelect: true,
    centerMode: true,
    arrows: false,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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

export const SliderDrink = () => (
  <Banner>
    <BannerContent>
        <Link href="/categories/aves">
        <h5>Drinks do momento</h5>
        </Link>
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
