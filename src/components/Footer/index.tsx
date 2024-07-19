/* eslint-disable prettier/prettier */
import Link from 'next/link';
import {BannerFooter, FollowUs, FooterBottom, FooterColumn, FooterContent, FooterWrapper, NewsletterForm } from './styled';

export const Footer = () => (
    <BannerFooter>
        <img className='BANimg' src="/cheffyimg.png" alt="Cheffy" />
    <FooterWrapper>
      <FooterContent>
        <FooterColumn>
          <h4>Sessões</h4>
          <ul>
            <li><Link href="/categories/aves">Aves</Link></li>
            <li><Link href="/categories/carnes">Carnes</Link></li>
            <li><Link href="/categories/massas">Massas</Link></li>
            <li><Link href="/categories/saudavel">Saudável</Link></li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h4>Contact</h4>
          <ul>
            <li><Link href="/help">Help & Support</Link></li>
            <li><Link href="/partner">Partner with us</Link></li>
            <li><Link href="/ride">Ride with us</Link></li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h4>Legal</h4>
          <ul>
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/cookie">Cookie Policy</Link></li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h4>Follow Us</h4>
          <FollowUs>
            <a href="#"><img src="/facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="/Instagram.svg" alt="Instagram" /></a>
          </FollowUs>
          <NewsletterForm>
            <input type="email" placeholder="Digite seu e-mail" />
            <button type="submit">Enviar</button>
          </NewsletterForm>
        </FooterColumn>
      </FooterContent>
      <FooterBottom>
        <p> Todos direitos reservados © CHEFFY, 2024.</p>
        <p><span className="red-heart" style={{ color: '#FDBC30' }}>Desenvolvido ❤</span> por <a href="https://www.linkedin.com/in/rafael-sales-b4bb37152/">Rafael Sales</a> / <a href="https://www.linkedin.com/in/naiara-antunes-82a341190/">Naiara Antunes</a></p>
      </FooterBottom>
    </FooterWrapper>
    </BannerFooter>
  );
