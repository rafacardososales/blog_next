/* eslint-disable prettier/prettier */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BannerContent, Banner, IconList, IconItem } from './styled';
import Link from 'next/link';
import {
  faCoffee,
  faCookie,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

/* eslint-disable prettier/prettier */
export const BannerTop = () => (
  <Banner>
    <BannerContent>
    <IconList>
          <IconItem>
            <Link href="/categorias/cafe">

                <FontAwesomeIcon icon={faCoffee} />
                <span>Café</span>

            </Link>
          </IconItem>
          <IconItem>
            <Link href="/categorias/bolacha">

                <FontAwesomeIcon icon={faCookie} />
                <span>Bolacha</span>

            </Link>
          </IconItem>
          <IconItem>
            <Link href="/categorias/utensilios">

                <FontAwesomeIcon icon={faUtensils} />
                <span>Utensílios</span>

            </Link>
          </IconItem>
        </IconList>
    </BannerContent>
  </Banner>
);
