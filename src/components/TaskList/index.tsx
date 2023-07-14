import { GenericComponent } from "../GenericComponent";
import { TittleDiv } from "../../Pages/styles";
import { TaskList } from "./styles";
import { useState } from "react";
import { ListContainer } from "../TamingList/styles";

export function TasksLister() {
  const [tasks, setNewTasks] = useState<number[]>([]);

  function handleCreateNewTask() {
    setNewTasks([...tasks, tasks.length + 1]);
  }

  return (
    <TaskList>
      <TittleDiv>
        <h2>Lista de Tarefas</h2>
        <button onClick={handleCreateNewTask}>
          <strong>+</strong>
        </button>
      </TittleDiv>
      <ListContainer>
        {tasks.map((tasks) => {
          return <GenericComponent />;
        })}
      </ListContainer>
    </TaskList>
  );
}
