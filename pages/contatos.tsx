import React from 'react';
import {
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from 'react-icons/ai';

// import styles
import { Container, Content, Form, ContactDetails } from '../styles/Contacts';

// import components
import Header from '../components/Header';

export default function AboutUs() {
  return (
    <Container>
      <Header />

      <Content>
        <Form>
          <h1>Entre em contato</h1>

          <div className="form-group">
            <input type="text" placeholder="Primeiro nome" />
            <input type="text" placeholder="Último nome" />
          </div>

          <div className="form-group">
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="Celular" />
          </div>

          <textarea placeholder="Message"></textarea>
          <br />
          <button type="submit">Enviar</button>
        </Form>

        <ContactDetails>
          <h1>Informações para contato</h1>

          <p className="address">
            Balneário Camboriú, rua 981 <br />
            Número 323 - Sala cw981
          </p>

          <p className="contato">
            <span>Tel</span>
            <br />
            <a href="https://api.whatsapp.com/send?phone=554298704532">
              <AiOutlineWhatsApp />
              (+55) 42 9870-4532
            </a>
            <a href="#">
              <AiOutlinePhone />
              (+55) 42 9870-4532
            </a>
          </p>

          <p className="times">
            <span>Horários</span> <br />
            segunda-quinta: 08h:00 am - 06:00 pm <br />
            sexta: 08h:00 am - 04:00 pm
          </p>

          <p className="social">
            <span>Redes sociais</span> <br />
            <a href="https://www.instagram.com/torustrading/">
              <AiOutlineInstagram />
              torus_trading
            </a>{' '}
            <a href="https://www.youtube.com/">
              <AiOutlineYoutube />
              youtube
            </a>
          </p>
        </ContactDetails>
      </Content>
    </Container>
  );
}
