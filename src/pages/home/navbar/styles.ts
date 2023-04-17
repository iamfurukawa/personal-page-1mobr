import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  padding: 30px;

  width: 100vw;
  height: 50px;

  h1 {
    font-weight: bold;
  }
`;

export const Items = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    column-gap: 30px;

    width: 20vw;

    h2 {
        cursor: pointer;
        font-weight: 100;
    }
`;