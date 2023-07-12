import styled from "styled-components";

export const GenericContainer = styled.div`
  background-color: ${(props) => props.theme["red-300"]};

  div {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }
`;
