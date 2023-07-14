import styled from "styled-components";

export const TaskTamingContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 2rem;
  flex: 1;
  gap: 1rem;
  height: 400px;
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
