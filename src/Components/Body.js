import React from 'react';
import styled from 'styled-components';

function Body() {
  return (
    <ContainerBody>
      <ContainerInfo>
        <form>
            <input name="query" />
            <button type="submit">Submit</button>
        </form>
      </ContainerInfo>
    </ContainerBody>
  )
}

export default Body;

const ContainerBody = styled.div`
    margin-top: 50vh;
    margin-left: 200px;
`;

const ContainerInfo = styled.div`
    input {
        height: 30px;
        width: 200px;
        border-radius: 5px;
        margin-right: 5px;
        background-color: pink;
    }

    button {
        height: 30px;
        width: 100px;
        border-radius: 5px;
        font-weight: bold;
        background-color: white;
    }

    button:hover {
        cursor: pointer;
        height: 30px;
        width: 100px;
        border-radius: 5px;
        background-color: pink;
        color: white;
        font-weight: bold;
    }
`;
