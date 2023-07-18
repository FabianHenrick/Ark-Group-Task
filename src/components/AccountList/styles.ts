import styled from "styled-components";
import { GenericContainer } from "../GenericComponent/styles";

export const OnlineAccounts = styled.div`
  margin: 2rem;
  li {
    display: flex;
    gap: 1rem;
    margin: 1rem;
    max-height: 250px;
    list-style-type: none;
    overflow: auto;
  }

  ${GenericContainer} {
    display: flex;
    flex-direction: column;
    width: 120px;
    height: 120px;

    img {
      outline: solid green 5px;
      border-radius: 50%;
    }
  }
`;