/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// Header.tsx
import { SITE_NAME } from '@/src/config/app-config';
import { Container } from './styled';
import Link from 'next/link';

export const Header = () => {
  return (
    <Container>
      <div className="logo">
        <Link href="/"><img src="/logo.png" alt="Cheffy Receitas" /></Link>
      </div>
      <div className="search">
        <input type="text" placeholder="Procurar receita..." />
      </div>
      <div className="social">
        <Link href="/"><img src="/Instagram.svg" alt="Instagram" /></Link>
      </div>
    </Container>
  );
};
