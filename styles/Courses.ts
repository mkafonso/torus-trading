import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div``;

export const CourseContent = styled.div`
  padding: 45px 30px;

  > h1 {
    line-height: 110%;
    margin-bottom: 15px;
    font-size: 35px;
  }
`;

export const CourseList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const CourseItem = styled.li`
  width: 100%;
  min-width: 250px;
  height: 300px;
  background: var(--background);
  border-radius: 3px;
  cursor: pointer;
`;
