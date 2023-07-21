import styled from "styled-components";

export const GenericContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  //padding: 6px;
  align-items: center;
  height: 100px;

  div {
    display: flex;
    width: 100%;
    height: 100%;
    // margin-left: 1rem;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
  }
  button {
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
  }

  img {
    height: 80%;
    border-radius: 4px;
  }
`;
