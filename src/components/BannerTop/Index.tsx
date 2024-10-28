/* eslint-disable prettier/prettier */
import Slider from 'react-slick';
import { BannerContent, Banner, IconItem, BannerSlider } from './styled';
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* eslint-disable prettier/prettier */



export const settings = {
    dots: false,
    infinite: true,
    cssEase: 'ease',
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
        centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

export const BannerTop = () => (
  <Banner>
    <img className='imgBanner' src="bannertop.png" alt="" />
    <BannerContent>
        <BannerSlider>
        <Slider {...settings}>
        <IconItem>
          <Link href="/categories/aves">
            <img src="/Aves.png" alt="Aves" />
            <span>Aves</span>
          </Link>
        </IconItem>
        <IconItem>
          <Link href="/categories/Carnes">
            <img src="/Carnes.png" alt="Carnes" />
            <span>Carnes</span>
          </Link>
        </IconItem>
        <IconItem>
          <Link href="/categories/Massas">
            <img src="/Massas.png" alt="Massas" />
            <span>Massas</span>
          </Link>
        </IconItem>
        <IconItem>
          <Link href="/categories/Saudavel">
            <img src="/Saudavel.png" alt="Saudavel" />
            <span>Saudáveis</span>
          </Link>
        </IconItem>
        <IconItem>
          <Link href="/categories/Sobremesa">
            <img src="/Sobremesa.png" alt="Sobremesa" />
            <span>Sobremesa</span>
          </Link>
        </IconItem>
        <IconItem>
          <Link href="/categories/Bolos e Tortas">
            <img src="/BolorsTotas.png" alt="BolorsTotas" />
            <span>Bolos e Tortas</span>
          </Link>
        </IconItem>
        <IconItem>
          <Link href="/categories/Drinks">
            <img src="/Drinks.png" alt="Drinks" />
            <span>Massas</span>
          </Link>
        </IconItem>
        <IconItem>
          <Link href="/categories/Salgados">
            <img src="/Salgados.png" alt="Salgados" />
            <span>Salgados</span>
          </Link>
        </IconItem>
        </Slider>
        </BannerSlider>
    </BannerContent>
  </Banner>
);
