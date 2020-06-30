/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <a>Listar</a>
        <Link to="/import">
          <a href="true">Importar</a>
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
