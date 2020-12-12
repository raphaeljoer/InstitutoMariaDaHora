import Link from 'next/link';
import { FiBarChart } from 'react-icons/fi';
import Image from 'next/image';

import {
  Logo,
  NavbarContainer,
  MenuLeft,
  Nav,
  MenuContainer,
  MenuItem,
  MenuRight,
  Button,
  MenuMobile,
} from './style';

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <Logo>
          <Image
            src="/images/logo-light.png"
            height={28}
            width={52}
            alt="Instituto Maria da Hora"
            layout="fixed"
            priority
          />
        </Logo>
        <MenuLeft>
          <MenuContainer>
            <Link href="#about" passHref>
              <MenuItem>Projetos</MenuItem>
            </Link>

            <Link href="#about" passHref>
              <MenuItem>Transparencia</MenuItem>
            </Link>

            <Link href="#about" passHref>
              <MenuItem>Faça parte</MenuItem>
            </Link>
          </MenuContainer>
        </MenuLeft>
        <MenuRight>
          <Link href="#about" passHref>
            <Button>
              <a>Contato</a>
            </Button>
          </Link>
        </MenuRight>
        <MenuMobile>
          <FiBarChart />
        </MenuMobile>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
