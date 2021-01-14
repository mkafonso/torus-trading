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
  height: 400px;

  img {
    height: 400px;
    object-fit: cover;
  }
`;

export const AboutContent = styled.div`
  padding: 45px 30px;

  > h1 {
    line-height: 110%;
    margin-bottom: 15px;
    font-size: 40px;
  }

  > p {
    font-weight: 400;
    font-size: 20px;
    margin: 40px 0;
    line-height: 29px;
  }
`;

export const ButtonSignIn = styled.button`
  border: none;
  background: var(--error);
  color: var(--background);
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  width: 215px;
  height: 64px;
  font-size: 1.125rem;
`;

export const MeetOurTeam = styled.div`
  padding: 45px 30px;
  background: #3c3f51;

  > h1 {
    line-height: 110%;
    margin-bottom: 15px;
    font-size: 40px;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    margin: 40px 0;
    line-height: 29px;
  }
`;

export const SignInButton = styled.button`
  border: none;
  background: var(--error);
  color: var(--background);
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  width: 215px;
  height: 64px;
  font-size: 1.125rem;
`;
