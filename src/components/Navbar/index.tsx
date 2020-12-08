import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';

import {
  Logo,
  NavbarContainer,
  Menu,
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
            src="/images/logo-imh-dark.png"
            height={36}
            width={138}
            alt="Instituto Maria da Hora"
            layout="fixed"
            priority
          />
        </Logo>
        <Menu>
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
        </Menu>
        <MenuRight>
          <Link href="#about" passHref>
            <Button>
              <a>Contato</a>
            </Button>
          </Link>
        </MenuRight>
        <MenuMobile>
          <FiMenu color="#554d89" size="24" />
        </MenuMobile>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
