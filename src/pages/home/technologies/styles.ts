import styled from "styled-components";

export const Content = styled.div`
  display: flex;

  flex-direction: column;

  .Typewriter__cursor {
    font-size: 50px;
  }

  p {
    margin: 5px;
    font-size: 25;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;

`;

export const Link = styled.div`
  display: flex;
  align-items: center;

  margin: 10px;

  p {
    margin-left: 10px;
  }
`;
