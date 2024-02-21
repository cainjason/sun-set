import React from 'react';
import logo from './logo.2.jpg'
import styled from 'styled-components';

console.log(logo);

function Header() {
  return (
    <HeaderComponent>
      <HeaderInfo>
      <img src={logo} alt="Logo" />
      </HeaderInfo>
    </HeaderComponent>
  )
}

export default Header;

const HeaderComponent = styled.div`
    
`;

const HeaderInfo = styled.div`
    img {
        height: 100vh;
        width: 50vw;
        z-index: 0;
    }
`;
