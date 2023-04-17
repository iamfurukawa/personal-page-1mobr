import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  height: 100%;
`;

export const Info = styled.div`
  display: flex;

  @media (max-width: 425px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 100px;
  }

  img {
    margin: 20px;
    clip-path: circle();

    width: 200px;
    height: 200px;
  }
`;
