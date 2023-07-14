import styled from "styled-components";

export const TamingList = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: column;

  li {
    max-height: 300px;
    overflow: auto;
    list-style-type: none;
  }
`;
