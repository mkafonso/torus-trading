import React from 'react';
import Slider from 'react-slick';

// import styles
import {
  Container,
  Hero,
  AboutContent,
  MeetOurTeam,
  SignInButton,
} from '../styles/AboutUs';

// import components
import Header from '../components/Header';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
};

export default function AboutUs() {
  return (
    <Container>
      <Header />

      <Hero>
        <Slider {...settings}>
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        </Slider>
      </Hero>

      <AboutContent>
        <h1>Sobre a Torus Trading</h1>

        <p>
          Aqui você irá entender melhor nossa forma de ensino. <br />
          <br />
          Ao perceber a grande quantidade de pessoas que nunca tiveram contato
          com o mercado financeiro, ou até mesmo aqueles que têm o interesse em
          ingressar neste mercado e por falta de orientação e dificuldades de
          encontrar a direção, acabam falhando ao dar os primeiros passos e, às
          vezes, desistindo de uma forma precoce, a TORUS, com todo know-how que
          detém, se preocupou com esse público e voltou seus os olhos para estas
          pessoas buscando ensina-las da melhor forma. <br />
          <br />
          Nossa intenção é a inserção e suporte àqueles que querem se tornar
          reais operadores da bolsa de valores e, consequentemente, começar a
          lucrar de forma profissional.
        </p>
      </AboutContent>

      <MeetOurTeam>
        <h1>Como funciona</h1>

        <div>
          <h2>1 - Abra sua conta</h2>
          <p>
            Agora que você já sabe que a gente tá aqui com um time incrível
            pronto pra te ajudar, chegou a hora de você abrir a sua conta! O
            processo é bem simples e com isso você passa a ter acesso a uma
            infinidade de investimentos.
          </p>
        </div>
        <div>
          <h2>2 - Descubra seu Perfil de Investidor</h2>
          <p>
            Para encontrar o investimento ideal para os seus objetivos, você
            precisa descobrir qual é o seu Perfil de Investidor! Ao acessar sua
            conta pela primeira vez, você vai precisar responder algumas
            perguntas e com isso você saberá qual dos perfis abaixo é o seu.
          </p>
        </div>
        <div>
          <h2>3 - Transfira seu dinheiro</h2>
          <p>
            Agora, basta transferir o valor que você deseja investir para sua
            conta na Rico! Separamos algumas informações que você precisa saber:
          </p>
        </div>

        <SignInButton>Abra a sua conta</SignInButton>
      </MeetOurTeam>
    </Container>
  );
}
