import { useState, useCallback } from 'react';
import Link from 'next/link';
import {
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
  TopRectangleIcon,
  MidleRectangleIcon,
  BottomRectangleIcon,
} from './style';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTogleMobileMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <Nav>
      <MobileNavbar isOpen={isOpen}>
        <MobileMenuContainer>
          <MobileMenuItem>
            <Link href="/about" passHref>
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
        <Link href="/" passHref>
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
        </Link>
        <MenuLeft>
          <MenuContainer>
            <Link href="/about" passHref>
              <MenuItem>O instituto</MenuItem>
            </Link>

            <Link href="/about" passHref>
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
          <TopRectangleIcon isOpen={isOpen} />
          <MidleRectangleIcon isOpen={isOpen} />
          <BottomRectangleIcon isOpen={isOpen} />
        </MenuMobile>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
