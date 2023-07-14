import styled from "styled-components";

export const HeaderContent = styled.div`
  background: ${(props) => props.theme["green-500"]};
  align-items: center;
  height: 70px;
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 1rem;

  img {
    height: 80px;
  }
  div {
    justify-content: center;
    display: flex;
  }
`;

export const LogoName = styled.div`
  align-items: center;
`;
