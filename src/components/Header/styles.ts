import styled from "styled-components";

export const HeaderContent = styled.div`
  background: ${(props) => props.theme["green-500"]};
  align-items: center;
  text-align: center;
  padding: 2rem;
  gap: 1rem;

  div {
    justify-content: center;
    display: flex;
  }
`;
