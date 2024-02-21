import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import styled from 'styled-components';

function App() {
  return (
    <MainContainer className="app">
      <Header />
      <Body />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
`;
