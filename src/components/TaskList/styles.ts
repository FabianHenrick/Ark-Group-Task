import styled from "styled-components";

export const TaskListContainer = styled.div`
  background-color: ${(props) => props.theme["red-500"]};
`;

export const TaskContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1.5rem;
  padding: 2rem;
`;
