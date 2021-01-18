import { useCallback, useState, useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import { IconBaseProps } from 'react-icons/lib';

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

interface IMenuProps {
  label: string;
  link: string;
  icon: IconBaseProps;
}

interface INavbarConfig {
  themeBackground?: 'transparent' | 'opaque';
  initialSticky?: boolean;
}

const Navbar = ({
  themeBackground = 'transparent',
  initialSticky = true,
}: INavbarConfig) => {
  const navBarHeightRef = useRef(0);
  const [sticky, setSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuMain = [
    {
      label: 'O instituto',
      link: '/about',
      icon: FiHome,
    },
    {
      label: 'Projetos',
      link: '/projetos',
      icon: FiUsers,
    },
    {
      label: 'Transparência',
      link: '/transparencia',
      icon: FiAward,
    },
    {
      label: 'Faça parte',
      link: '/faca-parte',
      icon: FiSmile,
    },
  ];

  const handleTogleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  const stickyNavBar = useCallback((event) => {
    if (window.pageYOffset > navBarHeightRef.current && event.deltaY < 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }, []);

  useEffect(() => {
    navBarHeightRef.current = document.getElementById('navbar').offsetHeight;
    window.addEventListener('wheel', stickyNavBar);

    return () => {
      window.removeEventListener('wheel', stickyNavBar);
    };
  }, [stickyNavBar]);

  return (
    <Nav
      id="navbar"
      sticky={sticky}
      themeBackground={themeBackground}
      initialSticky={initialSticky}
    >
      <MobileNavbar isOpen={isMobileMenuOpen}>
        <MobileMenuContainer>
          {menuMain.map(({ icon: Icon, label, link }) => (
            <MobileMenuItem key={uuid()}>
              <Link href={link} passHref>
                <a>
                  {Icon && <Icon size={20} />}
                  <span>{label}</span>
                </a>
              </Link>
            </MobileMenuItem>
          ))}
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

        {menuMain && (
          <MenuLeft>
            <MenuContainer>
              {menuMain.map(({ label, link }) => (
                <Link key={uuid()} href={link} passHref>
                  <MenuItem>{label}</MenuItem>
                </Link>
              ))}
            </MenuContainer>
          </MenuLeft>
        )}

        <MenuRight>
          <Link href="/contato" passHref>
            <Button>
              <a>Contato</a>
            </Button>
          </Link>
        </MenuRight>

        <MenuMobile onClick={handleTogleMobileMenu}>
          <TopRectangleIcon isOpen={isMobileMenuOpen} />
          <MidleRectangleIcon isOpen={isMobileMenuOpen} />
          <BottomRectangleIcon isOpen={isMobileMenuOpen} />
        </MenuMobile>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
