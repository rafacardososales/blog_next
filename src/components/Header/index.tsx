/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { SITE_NAME } from '@/src/config/app-config';
import { Container } from './styled';
import Link from 'next/link';

export const Header = () => {
  return (
    <Container>
      <Link href="/"><img src="/logo.png" alt="" /></Link>
      <input type="text" placeholder="Procurar receita..."></input>
    </Container>
  );
};
