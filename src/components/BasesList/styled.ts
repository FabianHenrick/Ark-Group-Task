import styled from "styled-components";
import { GenericContainer } from "../GenericComponent/styles";

export const BaseList = styled.div`
  display: flex;
  overflow: auto;
  height: 100%;
  width: 100%;
`;
export const BaseContainer = styled.div`
  margin: 0 2rem;
  height: 450px;

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
