import styled from "styled-components";
import { GenericContainer } from "../GenericComponent/styles";

export const BaseList = styled.div`
  margin: 2rem;
  li {
    display: flex;
    overflow: auto;
    height: 100%;
    width: 100%;
  }

  ${GenericContainer} {
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 400px;
    div {
      width: 80%;
      margin-right: 15px;
    }
  }
`;
