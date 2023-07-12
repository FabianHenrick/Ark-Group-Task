import styled from "styled-components";

export const GenericContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  padding: 6px;
  align-items: center;
  height: 100px;
  border: solid 1px green;
  justify-content: space-between;

  img {
    height: 80%;
    border-radius: 4px;
  }
`;
