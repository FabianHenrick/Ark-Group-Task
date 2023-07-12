import styled from "styled-components";
import { GenericContainer } from "../components/GenericComponent/styles";
export const TaskTamingContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 2rem;
  flex: 1;
  gap: 1rem;
  height: 300px;
`;

export const TaskList = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
`;

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
  }
`;

export const MembersContainer = styled.div`
  margin: 2rem;
  flex: 1;
  height: 200px;
`;

export const TittleDiv = styled.div`
  background-color: ${(props) => props.theme["red-300"]};
  overflow: visible;
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  button {
    color: white;
    height: 25px;
    width: 25px;
    border-radius: 2rem;
    background: ${(props) => props.theme["green-500"]};
    cursor: pointer;
    border: 0;
    box-shadow: 2px 2px 2px #00000050;
  }
  button:hover {
    background: ${(props) => props.theme["green-700"]};
  }
`;
