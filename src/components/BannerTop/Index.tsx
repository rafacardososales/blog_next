/* eslint-disable prettier/prettier */
import { BannerContent, Banner, IconList, IconItem } from './styled';
import Link from 'next/link';
/* eslint-disable prettier/prettier */
export const BannerTop = () => (
  <Banner>
    <BannerContent>
      <IconList>
        <IconItem>
          <Link href="/categories/aves">
            <img src="/Aves.png" alt="" />
            <span>Aves</span>
          </Link>
        </IconItem>
        <IconItem>
          <Link href="/categories/Carnes">
            <img src="/Carnes.png" alt="" />
            <span>Carnes</span>
          </Link>
        </IconItem>
        <IconItem>
          <Link href="/categories/Massas">
            <img src="/Massas.png" alt="" />
            <span>Massas</span>
          </Link>
        </IconItem>
        <IconItem>
          <Link href="/categories/Saudavel">
            <img src="/Saudavel.png" alt="" />
            <span>Saudáveis</span>
          </Link>
        </IconItem>
        <IconItem>
          <Link href="/categories/Sobremesa">
            <img src="/Sobremesa.png" alt="" />
            <span>Sobremesa</span>
          </Link>
        </IconItem>
        <IconItem>
          <Link href="/categories/Bolos e Tortas">
            <img src="/BolorsTotas.png" alt="" />
            <span>Bolos e Tortas</span>
          </Link>
        </IconItem>
        <IconItem>
          <Link href="/categories/Drinks">
            <img src="/Drinks.png" alt="" />
            <span>Drinks</span>
          </Link>
        </IconItem>
        <IconItem>
          <Link href="/categories/Salgados">
            <img src="/Salgados.png" alt="" />
            <span>Salgados</span>
          </Link>
        </IconItem>
      </IconList>
    </BannerContent>
  </Banner>
);
