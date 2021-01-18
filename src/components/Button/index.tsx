import Link from 'next/link';

import { FiArrowRight } from 'react-icons/fi';
import { Container } from './styles';

interface IButtonProps {
  link: string;
  children: React.ReactNode;
}

const Button = ({ link, children }: IButtonProps) => {
  return (
    <Link href={link} passHref>
      <Container>
        <span>{children}</span>
        <div>
          <FiArrowRight />
        </div>
      </Container>
    </Link>
  );
};

export default Button;
