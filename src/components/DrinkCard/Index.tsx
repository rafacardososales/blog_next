/* eslint-disable prettier/prettier */

import Link from "next/link";
import { Container, PostCardCover, PostCardHeading } from "./styled";
import Slider from 'react-slick';


export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



export type PostCardProps = {
    slug: string;
    title: string;
    cover: string;
  };

  export const DrinkCard = ({ slug, title, cover }: PostCardProps) => {
    return (
      <Container>
        <Slider {...settings}>
        <PostCardCover>
          <Link href="/post/[slug]" as={`/post/${slug}`}>
            <img src={cover} alt={title} />
          </Link>
        </PostCardCover>
        <PostCardHeading>
          <Link href="/post/[slug]" as={`/post/${slug}`}>
            {title}
          </Link>
        </PostCardHeading>
        </Slider>
      </Container>
    );
  };
