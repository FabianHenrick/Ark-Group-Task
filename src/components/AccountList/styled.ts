import styled from "styled-components";
import { GenericContainer } from "../GenericComponent/styles";

export const AccountsList = styled.div`
  display: flex;
  gap: 1rem;
`;

export const OnlineAccounts = styled.div`
  margin: 2rem;
  height: 200px;

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
