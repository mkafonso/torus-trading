import React from 'react';
import Link from 'next/link';

// import styles
import {
  Container,
  Content,
  CourseContent,
  CourseList,
  CourseItem,
} from '../styles/Courses';

// import components
import Header from '../components/Header';

export default function AboutUs() {
  return (
    <Container>
      <Header />

      <Content>
        <CourseContent>
          <h1>Nossos cursos</h1>

          <CourseList>
            <Link href="https://www.hotmart.com/pt-BR">
              <a target="_blank" rel="noreferrer">
                <CourseItem />
              </a>
            </Link>
          </CourseList>
        </CourseContent>

        <CourseContent>
          <h1>Nossos workshops</h1>

          <CourseList>
            <Link href="https://www.youtube.com/">
              <a target="_blank" rel="noreferrer">
                <CourseItem />
              </a>
            </Link>
            <CourseItem />
            <CourseItem />
            <CourseItem />
          </CourseList>
        </CourseContent>
      </Content>
    </Container>
  );
}
