import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 30px;
  height: 80px;

  .logo a {
    > svg {
      width: 172px;
      height: 40px;
      /* margin-left: 95px; */
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

  > a {
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
