import { useState, useCallback } from 'react';
import Link from 'next/link';
import {
  FiBarChart,
  FiHome,
  FiUsers,
  FiAward,
  FiSmile,
  FiMail,
  FiFacebook,
  FiInstagram,
  FiPhoneCall,
} from 'react-icons/fi';
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
  MobileNavbar,
  MobileMenuContainer,
  MobileMenuItem,
  MobileSocialContainer,
  MobileSocialMenuItem,
} from './style';

const Navbar = () => {
  const [togleMobileMenu, setTogleMobileMenu] = useState(false);

  const handleTogleMobileMenu = useCallback(() => {
    setTogleMobileMenu(!togleMobileMenu);
  }, [togleMobileMenu]);

  return (
    <Nav>
      <MobileNavbar isOpen={togleMobileMenu}>
        <MobileMenuContainer>
          <MobileMenuItem>
            <Link href="#" passHref>
              <a>
                <FiHome />
                <span>O instituto</span>
              </a>
            </Link>
          </MobileMenuItem>
          <MobileMenuItem>
            <Link href="#" passHref>
              <a>
                <FiUsers />
                <span>Projetos</span>
              </a>
            </Link>
          </MobileMenuItem>
          <MobileMenuItem>
            <Link href="#" passHref>
              <a>
                <FiAward />
                <span>Transparência</span>
              </a>
            </Link>
          </MobileMenuItem>
          <MobileMenuItem>
            <Link href="#" passHref>
              <a>
                <FiSmile />
                <span>Faça parte</span>
              </a>
            </Link>
          </MobileMenuItem>
          <MobileMenuItem>
            <Link href="#" passHref>
              <a>
                <FiMail />
                <span>Contato</span>
              </a>
            </Link>
          </MobileMenuItem>
        </MobileMenuContainer>
        <MobileSocialContainer>
          <Link href="#" passHref>
            <MobileSocialMenuItem>
              <FiFacebook />
            </MobileSocialMenuItem>
          </Link>
          <Link href="#" passHref>
            <MobileSocialMenuItem>
              <FiInstagram />
            </MobileSocialMenuItem>
          </Link>
          <Link href="#" passHref>
            <MobileSocialMenuItem>
              <FiMail />
            </MobileSocialMenuItem>
          </Link>
          <Link href="#" passHref>
            <MobileSocialMenuItem>
              <FiPhoneCall />
            </MobileSocialMenuItem>
          </Link>
        </MobileSocialContainer>
      </MobileNavbar>
      <NavbarContainer>
        <Logo>
          <Image
            src="/images/logo-dark.png"
            height={28}
            width={52}
            alt="Instituto Maria da Hora"
            layout="fixed"
            priority
          />
        </Logo>
        <MenuLeft>
          <MenuContainer>
            <Link href="#" passHref>
              <MenuItem>Projetos</MenuItem>
            </Link>

            <Link href="#" passHref>
              <MenuItem>Transparencia</MenuItem>
            </Link>

            <Link href="#" passHref>
              <MenuItem>Faça parte</MenuItem>
            </Link>
          </MenuContainer>
        </MenuLeft>
        <MenuRight>
          <Link href="#" passHref>
            <Button>
              <a>Contato</a>
            </Button>
          </Link>
        </MenuRight>
        <MenuMobile onClick={handleTogleMobileMenu}>
          <FiBarChart />
        </MenuMobile>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
