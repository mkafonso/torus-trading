import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 30px;
  height: 80px;

  .logo {
    > svg {
      width: 172px;
      height: 40px;
      margin-left: 95px;
    }
  }

  .mobile-menu {
    display: none;

    > svg {
      cursor: pointer;
    }
  }

  @media (max-width: 1200px) {
    padding: 10px;
    height: auto;

    .mobile-menu {
      display: inline;
    }

    .logo {
      display: none;
    }
  }
`;

export const MenuItems = styled.ul`
  display: flex;
  align-items: center;

  > li {
    margin: 0 16px;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const AuthItems = styled.ul`
  display: flex;
  align-items: center;

  > li {
    margin: 0 16px;
    cursor: pointer;
  }
`;

export const Hero = styled.div`
  width: 100%;
  height: 500px;
  background: var(--background);

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-image: url('https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
  background-repeat: no-repeat;
  background-position: center 10%;
  background-size: cover;

  padding: 20px 30px;
`;

export const MainButton = styled.button`
  border: none;
  background: var(--error);
  color: var(--background);
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  width: 215px;
  height: 64px;
  font-size: 1.125rem;
  margin-left: 128px;

  @media (max-width: 950px) {
    margin: auto;
  }
`;

export const LatestNews = styled.div`
  width: 550px;
  height: 400px;
  background: var(--primary);
  border-radius: 4px;

  @media (max-width: 950px) {
    display: none;
  }
`;

export const Simulator = styled.div`
  width: 100%;
  height: 600px;
  background: var(--primary);
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 880px) {
    flex-direction: column;
    height: auto;
    width: 100%;

    input {
      width: 90vw !important;
    }
  }

  input {
    width: 42vw;
  }
`;

export const SimulatorValues = styled.div`
  > div {
    margin: 40px 0;
  }
`;

export const SimuladorGraphics = styled.div`
  height: 400px;
  width: 400px;
  background: var(--background);
  border-radius: 4px;
  padding: 20px 0;

  display: flex;
  justify-content: space-around;

  @media (max-width: 880px) {
    width: 90vw !important;
  }
`;

export const Gain = styled.div`
  color: var(--primary);
  text-align: center;
  position: relative;

  > h2 {
    margin-top: 30px;
    font-size: 0.6953rem;
    color: var(--secondary);

    > span {
      font-size: 1.82025rem;
      color: var(--secondary);
    }
  }

  > .chart {
    width: 100px;
    background: var(--error);
    margin: 0 auto;
    border-radius: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
