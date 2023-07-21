import styled from "styled-components";
import { GenericContainer } from "../GenericComponent/styles";

export const OnlineAccounts = styled.div`
  margin: 2rem;
  li {
    display: flex;
    gap: 1rem;
    margin: 1rem;
    max-height: 550px;
  }

  ${GenericContainer} {
    display: flex;
    align-items: center;
    flex-direction: column;
    background: darkgray;
    border-radius: 8px;
    box-shadow: 5px 5px 5px 5px #00000050;

    div {
      padding: 0 1rem;
      border-radius: 0 0px 5px 5px;
      background: gray;
      display: flex;
      justify-content: space-between;
    }

    img {
      clip-path: circle();
    }
  }
`;
