import React, { useState } from 'react';
import Link from 'next/link';
import { MdMenu } from 'react-icons/md';

// import styles
import {
  Container,
  Header,
  MenuItems,
  AuthItems,
} from '../../styles/components/Header';

import LogoComponent from '../../commons/Logo';

export default function HeaderComponent() {
  return (
    <Container>
      <Header>
        <div className="mobile-menu">
          <MdMenu color="#fff" size={32} />
        </div>

        <div className="logo">
          <Link href="/">
            <a>
              <LogoComponent />
            </a>
          </Link>
        </div>

        <MenuItems>
          <Link href="Investir">
            <a>
              <li>Investir</li>
            </a>
          </Link>

          <Link href="/cursos">
            <a>
              <li>Cursos</li>
            </a>
          </Link>

          <Link href="quem-somos">
            <a>
              <li>Sobre</li>
            </a>
          </Link>

          <Link href="contatos">
            <a>
              <li>Contatos</li>
            </a>
          </Link>

          <Link href="simulação">
            <a>
              <li>Simulador</li>
            </a>
          </Link>
        </MenuItems>

        <AuthItems>
          <li>Abra sua conta</li>
          <li>Login</li>
        </AuthItems>
      </Header>
    </Container>
  );
}
